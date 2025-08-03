/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Hedvig Letters Serif', 'serif'],
      },
      colors: {
        'primary': '#000000',
        'secondary': '#FFFFFF',
        'accent': '#4d65ff',
        'grid': '#E5E5E5',
      },
      animation: {
        'grid': 'moveGrid 2s linear infinite',
      },
      keyframes: {
        moveGrid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [],
}