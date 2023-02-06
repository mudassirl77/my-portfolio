/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      backgroundColor: {
        'dark': 'linear-gradient(rgb(0, 64, 97), rgb(0, 0, 0))',
        'light': 'linear-gradient(rgb(0, 136, 195), rgb(174, 174, 174))',
      },
    },
  },
  plugins: [
  ],
};
