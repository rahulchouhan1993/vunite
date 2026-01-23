/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        coral: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad8bb',
          300: '#f6be8c',
          400: '#f19e5c',
          500: '#ec7c3c',
          600: '#d4622a',
          700: '#b14d23',
          800: '#8f4022',
          900: '#74361f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        recoleta: ['Recoleta', 'serif'],
      },
    },
  },
  plugins: [],
}