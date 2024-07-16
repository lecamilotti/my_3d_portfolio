const defaultTheme = require('tailwindcss/defaultTheme');



const svgToDataUri = require('mini-svg-data-uri');

const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

import('tailwindcss').Config;

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: '#00686E',
        secondary: '#68696B',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        gradient: {
          'gradient-primary': ['#00686E', '#00B4B7'],
        },
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
