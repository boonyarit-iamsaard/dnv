import { type FC, type ReactNode } from 'react';

import Link from 'next/link';

import { LINKS } from '@/constants/links';
import { useWindowSize } from '@/hooks/use-window-size';
import { useLayoutStore } from '@/store/layout';
import { cn } from '@/utils/class-names';

interface NavigationProps {
  children: ReactNode;
  opened: boolean;
  transparent: boolean;
}

const SmallScreenNavigation: FC<
  Pick<NavigationProps, 'children' | 'opened'>
> = ({ children, opened }) => {
  return (
    <nav
      className={cn(
        'fixed inset-0 flex transform items-center justify-center bg-black py-16 transition-all duration-500 ease-in-out supports-[backdrop-filter]:bg-black/80 supports-[backdrop-filter]:backdrop-blur-md',
        opened
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      )}
    >
      {children}
    </nav>
  );
};

const LargeScreenNavigation: FC<Pick<NavigationProps, 'children'>> = ({
  children,
}) => {
  return <nav className="flex items-center gap-4">{children}</nav>;
};

const NavigationList: FC<Pick<NavigationProps, 'opened' | 'transparent'>> = ({
  opened,
  transparent,
}) => {
  return (
    <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
      {LINKS.map(({ name, href }) => (
        <li key={name}>
          <Link
            href={href}
            className={cn(
              "relative block px-4 py-2 uppercase leading-none after:absolute after:inset-x-4 after:bottom-0 after:block after:h-[0.125rem] after:scale-x-0 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 focus:after:scale-x-100",
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
  );
};

export const Navigation: FC = () => {
  const {
    header: { transparent },
    drawer: { opened },
  } = useLayoutStore();
  const { width } = useWindowSize();

  const smallScreen = width && width < 900;
  const navigationList = (
    <NavigationList opened={opened} transparent={transparent} />
  );

  return smallScreen ? (
    <SmallScreenNavigation opened={opened}>
      {navigationList}
    </SmallScreenNavigation>
  ) : (
    <LargeScreenNavigation>{navigationList}</LargeScreenNavigation>
  );
};
