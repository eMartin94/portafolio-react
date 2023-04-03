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
        secondary: '#FFF6BF',
        tertiary: '#15141b'
      },
    },
  },
  plugins: [],
}

