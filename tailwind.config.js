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
        bordergreen : "#D9F9E8",
        black : "#2C3333",
        silver : "#E7F6F2",
        darknav : "#395B64",
        sky : "#A5C9CA",
        logingray : "#F5F6FE",
        loginbackground : "#FCFCFF",
        loginbuttun : "#8083F2",
        danger : 'red',
        blue : 'blue',
        footerBG : '#EDFCF4',
        footerborder : "#CAF7DF"
        
      }
  },
  plugins: [],
  
}