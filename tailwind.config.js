/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "root": "#FF3811",
      "white": "#fff",
      "black": "#151515",
      "border-clr": "#2C2C2C",
      "error-clr" : "#FF3811",
      "green" : "#36D399",
      "form-bg": "#F3F3F3",
      "root-border" : "#FFEBE7"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}