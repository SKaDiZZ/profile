module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ["var(--font-main)", "sans-serif"],
      logo: ["var(--font-logo)", "sans-serif"],
    },
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "main-fg": "var(--main-fg)",
        "main-brand": "var(--main-brand)",
        "main-accent": "var(--main-accent)",
        "card-bg": "var(--card-bg)",
        "card-buton-bg": "var(--card-button-bg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
