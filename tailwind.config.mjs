/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fg: "#808dad",
        dark: "#090c10",
        "deep-blue": "#0e1630",
        brand: "var(--main-brand)",
        accent: "var(--main-accent)",
      },
    },
  },
  plugins: [],
};
