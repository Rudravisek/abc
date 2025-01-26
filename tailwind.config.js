/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000d15',
        secondary: '#f9f9f9',
        accent: '#f74242',
      },
    },
  },
  plugins: [],
};