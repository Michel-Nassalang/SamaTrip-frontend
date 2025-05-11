/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#34CCFF",
        secondary: "#FCE354",
        background: "#f9fafb",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'], 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
