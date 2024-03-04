/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "node_modules/preline/dist/*.js"                 
],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}

