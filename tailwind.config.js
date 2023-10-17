/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'bg-image': 'background-image',
        'height': 'height',
      },
    },
  },
  plugins: [],
}

