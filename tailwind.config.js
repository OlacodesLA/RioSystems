/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4900EE",
        secondary: "#87d453",
        tertiary: "#65b530",
        mycolor: "#67B534",
        best: "#0c0523",
      },
    },
  },
  plugins: [],
};
