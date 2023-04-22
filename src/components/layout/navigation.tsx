import { type FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LINKS } from '@/constants/links';
import { useLayoutStore } from '@/store/layout';
import { cn } from '@/utils/class-names';

export const Navigation: FC = () => {
  const { pathname } = useRouter();

  const {
    header: { transparent },
    drawer: { opened },
  } = useLayoutStore();

  return (
    <nav
      // TODO: Consider cleaning up the class names
      className={cn(
        'fixed inset-0 flex transform items-center justify-center bg-black transition-all duration-500 ease-in-out supports-backdrop-blur-md:bg-black/80 supports-backdrop-blur-md:backdrop-blur-md md:pointer-events-auto md:static md:transform-none md:bg-transparent md:py-0 md:opacity-100 md:transition-none md:supports-backdrop-blur-md:bg-transparent md:supports-backdrop-blur-md:backdrop-filter-none',
        opened
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      )}
    >
      <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
        {LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                "relative block px-4 py-2 uppercase leading-none after:absolute after:inset-x-4 after:bottom-0 after:block after:h-[0.125rem] after:scale-x-0 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 focus:after:scale-x-100",
                pathname === href ? 'after:scale-x-100' : '',
                opened || transparent
                  ? 'text-white after:bg-white'
                  : 'text-black after:bg-black'
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
