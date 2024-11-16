/** @type {import('tailwindcss').Config} */

export default {
  darkMode:"selector",
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors :{
        "primary-dark" : "#161616",
        "primary-light" :{
          "100" : "#f2f0ef",
          "300" : "#f2f2f2"
        },
        "secondary-dark":"#1c1c1c",
        "secondary-light": "#f2f0ef",
        "accent-light":"#002b5b",
        "accent-dark":"#40e0d0",
        "dull-light":{
          "100":"#cbd5e1",
          "300":"#939598"
        },
        "dull-dark" : {
          "100": "#475569",
          "300": "#303030"
        }

      },
      backgroundImage : {
        "light": "url(./src/assets/High_School.webp)",
        "dark" : "url(./src/assets/tunnel.png)"
      },
      keyframes : {
        bounceSlide :{
          "0%":{transform:"translatex(-90%)", width:"50px"},
        "70%":{transform:"translatex(2%)", width:"240px"},
        "100%":{
          transform:"translatex(0%)", width:"250px"
        }},
        InD:{
          "0%":{width:"200%"},
        "100%":{width:"100vw" }
  
      }},
      animation :{
        slide : "bounceSlide 300ms ease-in-out forwards",
        inOut : "InD 500ms ease-in-out forwards"
      }

    },
  },
  plugins: [],
}

