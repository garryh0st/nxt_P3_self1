import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticalight: ["Helveticalight", "Arial", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        "ppm-blackbold": ["ppm-blackbold", "Arial", "sans-serif"],
        "ppm-blackitalic": ["ppm-blackitalic", "Arial", "sans-serif"],
        "ppm-ultrabold": ["ppm-ultrabold", "Arial", "sans-serif"],
        "bebas": ["bebas", "Arial", "sans-serif"],
        "open-sauce": ["open-sauce", "Arial", "sans-serif"],


      },
      backgroundImage: {
        hero: "url('../public/images/hero.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
