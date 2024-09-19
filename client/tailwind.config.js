/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        insideChatBox: "inset 0px 0px 3px 2px #c5cbd3",
        keyNumber: "0px 0px 15px 3px #c5cbd3",
        imgDisp: "0px 0px 25px 3px #a7a7a7",
      },
      background:{
        slop: "linear-gradient(0deg, rgba(244,244,244,1) 50%, rgba(255,255,255,0.3781162123052346) 100%)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

