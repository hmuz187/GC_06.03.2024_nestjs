/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,vue}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1440px'
    },
   extend: {
    colors: {
      'theme-1st': '#fe90b4',
      'theme-2nd': '#feb5cd',
      'theme-3rd': '#3A4256',
    },
    boxShadow: {
      'box-shadow': '3px 4px 10px 2px rgba(0, 0, 0, 0.05)',
    },
    backgroundImage: {
      'bgHero': "url('/src/assets/img/bg.jpg')",
      'doctorNCL': "url('/src/assets/images/doctor.png')",
    },
   },
  },
  plugins: [],
}