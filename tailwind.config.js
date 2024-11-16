/** @type {import('tailwindcss').Config} */

export default {
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

      }

    },
  },
  plugins: [],
}

