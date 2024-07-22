import * as colors from '@radix-ui/colors';
import type { Config } from 'tailwindcss';

function createScale(color: Record<string, string>): Record<string, string> {
  return Object.entries(color).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      const colorIndex = key.match(/[A-Za-z]+(\d+)/)?.[1];
      if (colorIndex) {
        acc[colorIndex] = value;
      }
      return acc;
    },
    {},
  );
}

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'ui-serif'],
        outfit: ['var(--font-outfit)', 'ui-sans-serif'],
      },
      colors: {
        brand: createScale(colors.iris),
        brandDark: createScale(colors.irisDark),
        gs: createScale(colors.mauve),
        gsDark: createScale(colors.mauveDark),
      },
    },
  },
  plugins: [],
};
export default config;
