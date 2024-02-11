/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'title': '#2e2e2e',
        'body': '#808080',
        'in-field': '#808080',
        'disable': '#e6e6e6',
        'white': '#ffffff',
        'active': '#2e2e2e',
        'pressed': '#ffffff',
        'disable': '#fed530'
      },
      colors: {
        customGray: {
          100: '#333333',
          200: '#2F2F2F',
          300: '#292929',
          400: '#232323',
          500: '#1D1D1D',
          600: '#171717',
          700: '#111111',
          800: '#0B0B0B',
          900: '#050505',
        },
        'dark-gray': '#1e1e1e',
        'gold': '#525252',
        'medium-gray': '#3d3d3d',
        'shadow-gold': '#302d28',
        'red': '#fed530',
        'black': '#000000',
        'white': '#ffffff',
        'gray': '#2e2e2e',
        'placeholder': '#333333',
        'active': '#fed530',
        'pressed': '#3d3d3d',
        'disable': '#edf8f4'
      },
      borderColor: theme => ({
        'red': theme('colors.red'),
        'black': theme('colors.black'),
        'disable': theme('colors.disable')
      }),
      fontSize: {
        '3xl': ['32px', {
          letterSpacing: '0.05em',
          lineHeight: '40px',
        }],
      },
      fontFamily: {
        custom: ['DMSans', 'sans-serif'],
      },
      lineHeight: {
        '16': '6rem',
      }
    },
  },
  plugins: [],
};
