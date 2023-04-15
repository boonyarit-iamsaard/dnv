import {
  Noto_Sans_Display as NotoSansDisplay,
  Noto_Serif_Display as NotoSerifDisplay,
} from 'next/font/google';

export const notoSansDisplay = NotoSansDisplay({
  subsets: ['latin'],
  variable: '--font-noto-sans-display',
});

export const notoSerifDisplay = NotoSerifDisplay({
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
});
