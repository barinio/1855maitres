import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // sm: "576px",
        // => @media (min-width: 576px) { ... }
        // md: "960px",
        // => @media (min-width: 960px) { ... }
        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
