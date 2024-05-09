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


//

// "style": "npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch",
// "start": "node server/server.js",
// "dev": "nodemon server/server.js",
// "build:css": "npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css",
// "build": "npm run build:css"