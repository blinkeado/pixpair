/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'btn-circle',
    'btn-circle-rainbow'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4831D4',
        secondary: '#CCF381',
      },
    },
  },
  plugins: [],
} 