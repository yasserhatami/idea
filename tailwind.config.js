/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {},
      colors : {
        green : "#00D664",
        white : "#FFFFFF",
        darkblue : "#4E548C",
        bordergreen : "#D9F9E8"
      }
  },
  plugins: [],
  
}