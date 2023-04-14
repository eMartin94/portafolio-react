/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5ed8d8',
        secondary: '#c3c3c3',
        tertiary: '#15141b',
        alternative: '#458a8a',
        // light: {
        //   primary: '#15141b',
        //   secondary: '#c3c3c3',
        //   tertiary: '#fff'
        // },
        // dark: {
        //   primary: '#7FE9DE',
        //   secondary: '#c3c3c3',
        //   tertiary: '#15141b'
        // },
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        "gradient-hero-dark": "linear-gradient(to bottom, rgba(21, 20, 27, 1), rgba(21, 20, 27, 0.8), rgba(21, 20, 27, 0.5), rgba(21, 20, 27, 0.7), rgba(21, 20, 27, 0.97), rgba(21, 20, 27, 1)), url('/src/assets/bg-image-dark.webp')",
        "gradient-hero-light": "linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.5)), url('/src/assets/bg-image-light.webp')",
      },

    },
  },
  variants: {},
  plugins: [],

}

