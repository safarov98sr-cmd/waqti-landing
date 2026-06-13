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
        primary: '#10B981',
        'primary-light': '#D1FAE5',
        dark: '#065F46',
        forest: {
          DEFAULT: '#0A0F0D',
          950: '#060C08',
          900: '#0A0F0D',
          800: '#0D1A12',
          700: '#111F16',
          600: '#1A3328',
          500: '#1F4035',
        },
        emerald: {
          DEFAULT: '#10B981',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          muted: '#D4AF37',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6)',
        emerald: '0 4px 24px rgba(16,185,129,0.3)',
        'emerald-lg': '0 8px 40px rgba(16,185,129,0.45)',
        gold: '0 4px 24px rgba(245,158,11,0.3)',
        'gold-lg': '0 8px 40px rgba(245,158,11,0.45)',
      },
    },
  },
  plugins: [],
}
