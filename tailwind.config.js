/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#d4ff00',
          dark: '#bce600',
          muted: '#d4ff00',
        },
        mono: {
          950: '#0a0a0a',
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3a3a3a',
          600: '#555555',
          500: '#777777',
          400: '#999999',
          300: '#bbbbbb',
          200: '#d4d4d4',
          150: '#e0e0e0',
          100: '#eeeeee',
          50: '#f5f5f5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
