/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F0C929',
        'dark': '#222F51'
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [],
}