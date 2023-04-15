import { type FC, type PropsWithChildren } from 'react';

import { cn } from '@/utils/class-names';
import { notoSansDisplay, notoSerifDisplay } from '@/utils/fonts';

import { Footer } from './footer';
import { Header } from './header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        notoSansDisplay.variable,
        notoSerifDisplay.variable,
        'relative font-sans'
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
