import { useEffect, useState, type FC } from 'react';

import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { useLayoutStore } from '@/store/layout';
import { cn } from '@/utils/class-names';
import { debounce } from '@/utils/debounce';

export const Header: FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const {
    header: { setTransparent, setVisible, transparent, visible },
    drawer: { opened, open, close },
  } = useLayoutStore();

  const handleScroll = debounce(
    () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 80) ||
          currentScrollPos < 16
      );
      setTransparent(currentScrollPos < 80);
      setPrevScrollPos(currentScrollPos);
    },
    100,
    false
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        'fixed z-10 flex h-16 w-full items-center transition-all duration-500 ease-in-out',
        transparent ? 'bg-transparent shadow-none' : 'bg-white shadow-sm',
        visible ? 'top-0' : '-top-16'
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-4 md:px-8">
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
        <button
          type="button"
          onClick={() => (opened ? close() : open())}
          className={cn(
            'z-30 rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2',
            transparent
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
