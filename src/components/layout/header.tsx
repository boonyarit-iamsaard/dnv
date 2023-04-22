import { useEffect, useState, type FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconMenu2, IconX } from '@tabler/icons-react';

import { useWindowSize } from '@/hooks/use-window-size';
import { useLayoutStore } from '@/store/layout';
import { cn } from '@/utils/class-names';
import { debounce } from '@/utils/debounce';

import { Navigation } from './navigation';

export const Header: FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { events } = useRouter();
  const {
    header: { setTransparent, setVisible, transparent, visible },
    drawer: { opened, open, close },
  } = useLayoutStore();
  const { width } = useWindowSize();

  const largeScreen = !!width && width >= 900;

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.scrollY;
      const threshold = 80;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > threshold) ||
          currentScrollPos < threshold ||
          opened
      );
      setTransparent(currentScrollPos < threshold || opened);
      setPrevScrollPos(currentScrollPos);
    },
    100,
    false
  );

  // TODO: Consider refactoring theses effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [opened]);

  useEffect(() => {
    if (largeScreen) {
      close();
    }
  }, [largeScreen, close]);

  useEffect(() => {
    const handleRouteChange = () => {
      close();
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events, close]);

  return (
    <header
      className={cn(
        'fixed z-10 flex h-16 w-full items-center transition-all duration-500 ease-in-out',
        transparent ? 'bg-transparent' : 'bg-white',
        visible ? 'top-0' : '-top-16'
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-4 md:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className={cn(
            'block px-4 py-2 font-serif text-2xl font-bold uppercase leading-none transition-all duration-300 ease-in-out focus:outline-none focus:ring-2',
            transparent
              ? 'text-white hover:bg-white/20 focus:ring-white'
              : 'text-slate-900 hover:bg-slate-100 focus:ring-slate-900'
          )}
        >
          DNV
        </Link>

        {/* NAVIGATION */}
        <Navigation />

        {/* HAMBURGER MENU */}
        <button
          type="button"
          onClick={() => (opened ? close() : open())}
          className={cn(
            'z-30 block rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 md:hidden',
            transparent || opened
              ? 'text-white hover:bg-white/20 focus:ring-white'
              : 'text-slate-900 hover:bg-slate-100 focus:ring-slate-900'
          )}
        >
          <span className="sr-only">Toggle menu</span>
          {opened ? <IconX /> : <IconMenu2 />}
        </button>
      </div>
    </header>
  );
};
