/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/ui/**/*.{tsx,ts,js,jsx}"
  ],
  safelist: [
    'btn-circle',
    'btn-circle-rainbow',
    'bottom-[calc(env(safe-area-inset-bottom)+16px)]',
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
  presets: [require("./src/components/ui/ui/tailwind.config.js")]
}
