/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ['Oswald', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

