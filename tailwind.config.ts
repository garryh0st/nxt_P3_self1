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
        'helveticalight': ['Helveticalight', 'Arial', 'sans-serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'ppm-blackbold': ['ppm-blackbold', 'Arial', 'sans-serif'],
        'ppm-blackitalic': ['ppm-blackitalic', 'Arial', 'sans-serif'],
        'ppm-ultrabold': ['ppm-ultrabold', 'Arial', 'sans-serif'],

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
