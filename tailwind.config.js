/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens:{
        'phones':{'min':'300px','max':'550px'},
   
      }
    },
  },
  plugins: [],
}

