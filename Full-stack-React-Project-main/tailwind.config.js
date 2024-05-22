/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
   
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: "poppins",
      },
    },
  },
  plugins: [],
}