/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#Ff3600',
        },
      },
    },
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
