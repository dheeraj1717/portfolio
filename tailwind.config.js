/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#f7f7f7",
          100: "#fefefe",
          200: "#888888",
          300: "#66707a",
          400: "#33414e",
          500: "#181a1b",
          600: "#000e1b",
          700: "#000a14",
          800: "#00070e",
          900: "#000307",
        },
        button: {
          100: "#e1e5ff",
          200: "#c4ccff",
          300: "#a6b2ff",
          400: "#8999ff",
          500: "#6b7fff",
          600: "#5666cc",
          700: "#404c99",
          800: "#2b3366",
          900: "#151933",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
      },
      maxWidth: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "2000px",
      },
      screens: {
        xs: "400px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
