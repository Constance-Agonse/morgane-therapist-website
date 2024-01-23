/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'dark-green': '#3A5543',
      'green': '#C5D7C0',
      'light-green': '#EFF2EF',
    },
    fontFamily: {
      'body': ['Red Hat Text'],
      'title': ['Libre Baskerville'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
