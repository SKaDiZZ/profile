module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "main-fg": "var(--main-fg)",
        "main-brand": "var(--main-brand)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
