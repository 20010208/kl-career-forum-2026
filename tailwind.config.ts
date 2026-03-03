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
          DEFAULT: "#00C9B1",
          light: "#1DE8D8",
          dark: "#009E8E",
        },
        "forum-orange": "#FF6B35",
        "forum-gold": "#F5A623",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
