/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        insideChatBox: "inset 0px 0px 10px 0px #6a6a6a"
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

