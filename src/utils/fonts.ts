import { Playfair_Display as PlayfairDisplay, Poppins } from 'next/font/google';

export const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});
