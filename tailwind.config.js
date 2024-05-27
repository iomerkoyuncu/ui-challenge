/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': '0px 0px 15px 0px #FFFFFF12',
        'custom-2': '0px 25px 50px -12px #FFFFFF40',
        'custom-3': '0px 0px 10px 0px #00000012',
        'custom-4': '0px 20px 25px -5px #0000001A',
      }
    },
  },
  plugins: [],
}

