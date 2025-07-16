/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B2494',
        secondary: '#6C4EE6',
        accent: '#A18AFF',
        light: '#F4F2FF',
        dark: '#2B186A',
        white: '#FFFFFF',
        gray: {
          100: '#F4F2FF',
          200: '#E0D9F6',
          300: '#C1B6E3',
          400: '#A18AFF',
          500: '#6C4EE6',
          600: '#3B2494',
          700: '#2B186A',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
        northura: ['Northura Regular', 'sans-serif'],
        northuraExpanded: ['Northura Expanded', 'sans-serif'],
        northuraLight: ['Northura Light', 'sans-serif'],
        korolevMedium: ['"Korolev Medium"', 'sans-serif'],
        korolev: ['"Korolev Light"', 'sans-serif'],
        korolevHeavy: ['"Korolev Heavy"', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

