/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#274EFF",
        secondary:"#6a29e3"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

