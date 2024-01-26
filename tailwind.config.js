/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryText: '#8B2323', 
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: { // Replace 'mytheme' with your theme name
          primary: '#8B2323', // Your custom primary color
          // Define other colors or leave them to default...
        },
      },
    ],
  },
}