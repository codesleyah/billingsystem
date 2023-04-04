/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#001128",
        "transparent-white": "#0011287d",
      },
      backgroundImage: {
        'hero-bg': "url('/images/bannerbg.png')",
      }
    },
  },
  plugins: [],
}