/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/solar-panel.jpg')",
        "hero-solar": "url('/solar.jpeg')",
        "hero-solars": "url('/cctv-water.jpeg')",
        "hero-cctv": "url('/cctv-water-flood.jpg')",
        "hero-cctv":
          "url('/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg')",
        "hero-svg": "url('/heroe.svg')",
        "quote-bg":
          "url('/images/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg')",
      },
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
