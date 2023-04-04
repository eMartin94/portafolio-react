/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#7FE9DE',
        secondary: '#c3c3c3',
        tertiary: '#15141b'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, rgba(21, 20, 27, 1), rgba(21, 20, 27, 0.8), rgba(21, 20, 27, 0.5), rgba(21, 20, 27, 0.7), rgba(21, 20, 27, 0.97), rgba(21, 20, 27, 1)), url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg')"
      },
      
    },
  },
  plugins: [],
}

