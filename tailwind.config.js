/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071629',
          900: '#0a1f38',
          800: '#0f2c4f',
          700: '#143864',
          600: '#1c4a80',
          500: '#255e9f',
        },
        royal: {
          DEFAULT: '#14467d',
          hover: '#0e345e',
          light: '#eef5fc',
        },
        gold: {
          50: '#fef9ee',
          100: '#fdf2d7',
          200: '#fbe2aa',
          300: '#f7ce74',
          400: '#f3b43c',
          500: '#ee9a14',
          600: '#d97d09',
          700: '#b45a08',
        },
        cream: {
          50: '#fdfcf9',
          100: '#fbf8f2',
          200: '#f5eee3',
          300: '#ede1cf',
        },
        food: {
          red: '#c0392b',
          amber: '#d97706',
          green: '#27ae60',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(10, 31, 56, 0.05)',
        'card-hover': '0 10px 25px rgba(10, 31, 56, 0.1)',
        'dropdown': '0 12px 30px rgba(10, 31, 56, 0.12)',
      }
    },
  },
  plugins: [],
}
