/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        xp: ['"Trebuchet MS"', 'Tahoma', 'Segoe UI', 'MS Sans Serif', 'sans-serif'],
        passion: ['Segoe UI', 'sans-serif'],
      },
      backgroundColor: {
        primary: "#0b3142",
        secundary: "#8992A3",
        third: "#f4f1de"
      },
      colors: {
        primary: "#0b3142",
        secundary: "#8992A3",
        third: "#f4f1de"
      },
      textColor: {
        primary: "#0b3142",
        secundary: "#8992A3",
        third: "#004E64",
        javascript: "#FCAA00"
      }
    },
  },
  plugins: [],
};