/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Gunmetal_Gray:"#363837",
        Golden_Sand:"#F9CA6C "
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

