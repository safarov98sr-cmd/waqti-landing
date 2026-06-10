/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        primary: '#0F6E56',
        'primary-light': '#E1F5EE',
        gold: '#EF9F27',
        dark: '#085041',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15, 110, 86, 0.10)',
        'card-hover': '0 8px 40px rgba(15, 110, 86, 0.18)',
      },
    },
  },
  plugins: [],
}
