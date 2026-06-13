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
        // Legacy compat
        primary: '#0F6E56',
        'primary-light': '#E1F5EE',
        dark: '#085041',
        // Navy palette
        navy: {
          DEFAULT: '#070F1A',
          950: '#030810',
          900: '#070F1A',
          800: '#0A1628',
          700: '#0D1B2A',
          600: '#1A2E45',
          500: '#243D5C',
        },
        // Gold palette
        gold: {
          DEFAULT: '#EF9F27',
          light: '#F5C05A',
          muted: '#D4AF37',
          dark: '#C47D0E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6)',
        gold: '0 4px 24px rgba(239,159,39,0.3)',
        'gold-lg': '0 8px 40px rgba(239,159,39,0.45)',
      },
    },
  },
  plugins: [],
}
