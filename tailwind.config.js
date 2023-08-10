/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-nav':'#1F6E8C',
        'blue-body':'#0E2954',
        'blue-sb': '#BFD7EA',
      },
      fontFamily: {
        'Jua': ['Jua', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'] 
      },
      backgroundImage: {
        'cloud-bg': "url('./assets/wclouds.jpg')",
      },
    
    },
  },
  plugins: [],
}

