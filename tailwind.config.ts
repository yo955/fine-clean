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
        primary: "#1E2537",
        white: "#ffffff",
        orange: "#FDA720",
        gray: "#F5F5F5",
        // gray: "#636b81",
      },
    },
  },
  plugins: [],
} satisfies Config;
