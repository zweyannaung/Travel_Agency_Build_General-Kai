/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        "MEIMIN": "360px",
        "MIN": "375px",
        "MIN1":"414px",
        "MIN2": "600px",
        "MIN3": "800px",
        "xl2" : "1366px",
        "DD" : "1440px",
        "LL" : "1920px"
      },
      fontFamily: {
        'MM': ['"Noto Sans Myanmar"','sans-serif'],
        'EN' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

// 