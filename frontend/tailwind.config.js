/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-600': '#7857FF',
        'custom-purple-500': '#A29BFB',
        'custom-grey-100' : '#F7F7F9',
        'custom-grey-400': '#98A2B3',
        'custom-grey-500': '#E4E7EC',
      },
      width: {
        'selected': '300px',
      }
    },
  },
  plugins: [],
}

