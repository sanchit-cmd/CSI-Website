/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: '#068FFF', secondary: '#068FFF' },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}