/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'recoleta': ['Recoleta DEMO'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#FBF5E9',
        'dg-green': '#002922',
        'orange': '#F27C5A'
      },
      width: {
        '5xl': '1024px'
      },
      screens: {
        'xs': '480px'
      },
      backgroundImage: {
        'paris': 'url(./assets/img1.jpg)',
        'bridge': 'url(./assets/img2.jpg)'
      }
    },
  },
  plugins: [],
}
