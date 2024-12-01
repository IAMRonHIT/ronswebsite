/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#39CCCC',
        'brand-accent': '#01FF70',
        'brand-dark': '#001B29',
        'brand-darker': '#0A0F1B',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slideIn': 'slideIn 0.3s ease-out forwards',
        'laser': 'laser 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        laser: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 25px rgba(57, 204, 204, 0.1)',
        'glow-blue': '0 0 15px rgba(57, 204, 204, 0.1)',
        'glow-blue-sm': '0 0 8px rgba(77, 158, 255, 0.1)',
        'glow-green': '0 0 15px rgba(49, 205, 117, 0.1)',
      },
    },
  },
  plugins: [],
}