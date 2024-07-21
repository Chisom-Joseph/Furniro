import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";
import colors from "./config/colors.config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.png')",
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-semibold": ["poppins-SemiBold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
      },
      backgroundColor: colors,
      colors,
      letterSpacing: {
        widest: "2.5px",
      },
    },
  },
  plugins: [],
};
export default config;
