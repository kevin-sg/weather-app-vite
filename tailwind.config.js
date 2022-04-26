const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      width: {
        100: '25rem',
        113.5: '28.375rem'
      },
      margin: {
        100: '25rem',
        113.5: '28.375rem'
      },
      zIndex: {
        70: '70'
      },
      transitionProperty: {
        height: 'height',
        left: 'left'
      }
    }
  },
  plugins: []
};
