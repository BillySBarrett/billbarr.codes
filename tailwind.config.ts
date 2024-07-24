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

// a function to generate the brand scale "like" "brand-1": "hsl(var(--brand-1) / <alpha-value>)", from 1 to nrColors
function createBrandScale(nrColors: number, dark: boolean): Record<string, string> {
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
        gs: createScale(colors.mauve),
        gsDark: createScale(colors.mauveDark),
      },
    },
  },
  plugins: [],
};
export default config;
