import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ["Almarai", "sans-serif"],
      },
      colors: {
        primary: "#2F2D2A",
        white: "#ffffff",
        orange: "#D6A336",
        gray: "#F5F5F5",
        menu_color: "#33373d",
        black_gray: "#3f444b",
        // gray: "#636b81",
      },
    },
  },
  plugins: [],
} satisfies Config;
