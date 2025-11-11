/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // 🎨 Paleta de cores "Aurora Elétrica"
      colors: {
        'dark-bg': '#0A090F',        
        'dark-card': '#100F15',      
        'electric-purple': '#9333ea', 
        'glow-green': '#4ade80',    
      },
    },
  },
  plugins: [],
}