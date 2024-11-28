/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darker: '#00141F',
          dark: '#1E2937',
          primary: '#4FFFB0',
          accent: '#A5B4FC',
          muted: '#1E2937',
          coral: '#FF9ECD',
          lavender: '#A5B4FC',
          mint: '#4FFFB0',
          steel: '#1E2937'
        }
      },
      boxShadow: {
        glow: '0 0 10px rgba(79, 255, 176, 0.2)',
        'glow-lg': '0 0 20px rgba(79, 255, 176, 0.3)',
        'glow-coral': '0 0 10px rgba(255, 158, 205, 0.2)',
        'glow-lavender': '0 0 10px rgba(165, 180, 252, 0.2)',
        'glow-mint': '0 0 10px rgba(79, 255, 176, 0.2)'
      }
    },
  },
  plugins: [],
};