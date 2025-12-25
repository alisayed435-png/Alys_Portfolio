/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a0a0f',
        'foreground': '#ffffff',
        'purple': {
          400: '#a855f7',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        'violet': {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        'pink': {
          400: '#f472b6',
          500: '#ec4899',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 60px rgba(139, 92, 246, 0.5)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        'gradient-creative': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%)',
      },
    },
  },
  plugins: [],
}
