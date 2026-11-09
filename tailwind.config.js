/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Founders_Grotesk_X-Condensed': ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        'Neue_Montreal': ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        'Neue Montreal': ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        'display': ['"Bebas Neue"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ochi: {
          lime: '#CDEA68',
          darkGreen: '#004D43',
          olive: '#718721',
          cardBg: '#192826',
        }
      }
    },
  },
  plugins: [],
}
