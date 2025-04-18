/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'shake-pause': 'shake-pause 2s ease-in-out infinite',
      },
      keyframes: {
        'shake-pause': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-4px)' },
          '20%': { transform: 'translateX(4px)' },
          '30%': { transform: 'translateX(-4px)' },
          '40%': { transform: 'translateX(4px)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    }
    
    
    
  },
  plugins: []
}
