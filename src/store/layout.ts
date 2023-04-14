import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LayoutState {
  header: {
    visible: boolean;
    transparent: boolean;
    setVisible: (visible: boolean) => void;
    setTransparent: (transparent: boolean) => void;
  };
  drawer: {
    opened: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}

// TODO: Use devtools only in development
export const useLayoutStore = create<LayoutState>()(
  devtools(
    set => ({
      header: {
        visible: true,
        transparent: true,
        setVisible: visible =>
          set(state => ({ header: { ...state.header, visible } })),
        setTransparent: transparent =>
          set(state => ({ header: { ...state.header, transparent } })),
      },
      drawer: {
        opened: false,
        open: () =>
          set(state => ({ drawer: { ...state.drawer, opened: true } })),
        close: () =>
          set(state => ({ drawer: { ...state.drawer, opened: false } })),
        toggle: () =>
          set(state => ({
            drawer: { ...state.drawer, opened: !state.drawer.opened },
          })),
      },
    }),
    { name: 'layout' }
  )
);
