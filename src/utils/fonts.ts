import {
  Open_Sans as OpenSans,
  Playfair_Display as PlayfairDisplay,
} from 'next/font/google';

export const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const openSans = OpenSans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});
