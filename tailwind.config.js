module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["Kalam", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
