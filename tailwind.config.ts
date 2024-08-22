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

function createBrandScale(
  nrColors: number,
  dark: boolean,
): Record<string, string> {
  const colors: Record<string, string> = {};
  for (let i = 1; i <= nrColors; i++) {
    if (dark) {
      colors[`brandDark-${i}`] = `hsl(var(--brandDark-${i}) / <alpha-value>)`;
    }
    colors[`brand-${i}`] = `hsl(var(--brand-${i}) / <alpha-value>)`;
  }
  return colors;
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
        ...createBrandScale(12, false),
        ...createBrandScale(12, true),

        gs: createScale(colors.gray),
        gsDark: createScale(colors.grayDark),
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
