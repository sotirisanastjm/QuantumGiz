/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
     
      'md': '980px',
     
      'lg': '1240px',
      
      'xl': '1280px',
      
      '2xl': '1536px',

    },
    colors:{
      blue: {
        'black':  '#0A2647',
        'dark': '#144272',
        'bright': '#205295',
        'light': '#2C74B3',
      },
      'white':    '#FFFFFF',
      'black':    '#212121',
    }
  },
  plugins: [],
}

