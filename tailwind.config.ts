import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa3ca',
          400: '#fe6aa8',
          500: '#f83f87',
          600: '#e71d6a',
          700: '#c91150',
          800: '#a61243',
          900: '#8a143b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
