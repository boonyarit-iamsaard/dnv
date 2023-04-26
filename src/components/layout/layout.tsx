import { type FC, type PropsWithChildren } from 'react';

import { cn } from '@/utils/class-names';
import { playfairDisplay, poppins } from '@/utils/fonts';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        playfairDisplay.variable,
        poppins.variable,
        'relative font-sans'
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
