/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "card-button-bg": "var(--card-button-bg)",
      },
    },
  },
  plugins: [],
};
