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
        navy: {
          950: "#060D1F",
          900: "#0B1736",
          800: "#0D2047",
          700: "#132554",
          600: "#1A3270",
        },
        teal: {
          DEFAULT: "#0097A7",
          light: "#00BCD4",
          dark: "#00838F",
        },
        "forum-orange": "#2A7A4E",
        "forum-gold": "#F5C518",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
