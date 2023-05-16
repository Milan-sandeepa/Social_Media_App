/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "accent":{
          "navy":{
            200:"#2596be",
          }    
        },
        "blue":{
          "navy":{
            200:"#055DE1",
          }
        }
      },
      // font-family: 'Inter', sans-serif;
      // font-family: 'Open Sans', sans-serif; 

      fontFamily:{
        Heading:["Montserrat","sans-serif"],
        Montserrat:["Montserrat","sans-serif"],
        Dancing:["Dancing Script","cursive"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
