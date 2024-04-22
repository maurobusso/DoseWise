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

//postcss.config.js

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }


//vercel.json

// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "server/server.js",
//       "use": "@vercel/node",
//       "config": {
//         "includeFiles": [
//           "views/**/*",
//           "public/**/*"
//         ]
//       }
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "server/server.js"
//     }
//   ]
// }