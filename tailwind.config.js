/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      "fontFamily": {
        "Outfit": ["Outfit", "sans-serif"],
        "Rubik": ["Rubik", "sans-serif"],
        "Poppins":["Poppins", "sans-serif"],
        "Inter":["Inter", "sans-serif"],
        "Jost":["Jost", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwindcss-motion'),
    require('tailwindcss-intersect') 
  ],
}

