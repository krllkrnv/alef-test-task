/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        active: "#01A7FD",
        "gray-light": "#F1F1F1",
        "gray-medium": "#FAFAFA",
        gray: "#1111117a",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};
