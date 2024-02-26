/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'dark-green': '#3A5543',
      'darker-green': '#2D4134',
      'green': '#C5D7C0',
      'light-green': '#EFF2EF',
      'white': '#FFFFFF',
      'light-grey': '#f4f3f3',
      'black': '#000'
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
