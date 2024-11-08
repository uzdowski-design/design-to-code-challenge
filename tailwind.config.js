/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lime: '#CAEA71',
      violet: '#844071',
      purple: '#404f84',
      gray: {
        100: '#ECECEC',
        200: '#E5E5DF',
        300: '#D9D9D9',
        400: '#827D7D',
        500: '#5F5959',
        700: '#443B3B',
        800: '#41423E',
        900: '#1C1B1B',
        950: '#111010'
      },
      transparent: 'transparent'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
