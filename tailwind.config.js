/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'cabin': ['Cabin', 'sans-serif'],
      
    },  
    extend: {
      backgroundImage: {
        'sunny_bg': "url('/bg/Sunny.webp')",
        'cloudy_bg': "url('/bg/Cloudy.webp')",
        'rainy_bg': "url('/bg/Rainy.webp')",
        'snowy_bg': "url('/bg/Snow.webp')",
        
      }
    },
  },
  plugins: [],
}

