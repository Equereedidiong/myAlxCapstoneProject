/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {

    extend: {

      colors: {


      },
      poppins: ['Poppins', 'sans-serif'],
      backgroundImage: {

        'Background': "url('/public/Background2.jpeg')"
        
      }

    },
  },
  plugins: [],
}
// Never put colors {} on its own inside the theme objact out it inside extend object.
