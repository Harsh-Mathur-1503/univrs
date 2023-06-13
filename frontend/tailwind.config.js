/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        'primary-500': '#fe7201',
        'primary-400': '#fe7e17',
        'primary-300': '#fe8a2d',
        'primary-200': '#fe9743',
        'primary-100': '#fea359',
        'secondary': '#f9f9f9',
        'background': 'radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%)'
      }
    },
  },
  plugins: [],
}