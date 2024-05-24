
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/js/**/*.js"],
  prefix: 'tw-',
  important: true,
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        PuviExtraBold: ["PuviExtraBold"],
        PuviMedium: ["PuviMedium"],
        GoogleSans: ["GoogleSans"],
        GoogleSansMedium: ["GoogleSansMedium"],
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};


