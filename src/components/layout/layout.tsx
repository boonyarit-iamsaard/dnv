import { type FC, type PropsWithChildren } from 'react';

import { cn } from '@/utils/class-names';
import { openSans, playfairDisplay } from '@/utils/fonts';

import { Header } from './header';
import { Footer } from './footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        playfairDisplay.variable,
        openSans.variable,
        'relative font-sans'
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
