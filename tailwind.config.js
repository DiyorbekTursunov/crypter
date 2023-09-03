/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGray:"#E1E2E2",
        bntBg:'#6DD3C2',
        headerColor:"#DBFF73"
      },
    },
  },
  plugins: [],
}