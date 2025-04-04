/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          poppins:['Poppins', 'sans-serif'],
          tangerine:['Tangerine', 'cursive']
        },
  
        colors:{
            "Babyblue":"#BFD7ED",
            "Bluegrotto":"#60A3D9"
        },
      },
    },
    plugins: [],
  }