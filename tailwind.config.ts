import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-display)', ...fontFamily.sans],
        serif: ['var(--font-noto-serif-display)', ...fontFamily.serif],
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
