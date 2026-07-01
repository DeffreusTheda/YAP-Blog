/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  ui: {
    colors: {
      primary: 'violet',
      neutral: 'slate',
    }
  }
};