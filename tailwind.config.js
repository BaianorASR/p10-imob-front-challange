/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'imob-blue': {
          50: '#f2f6f9',
          100: '#e6edf3',
          200: '#bfd3e2',
          300: '#99b8d1',
          400: '#4d82ae',
          500: '#004d8b',
          600: '#00457d',
          700: '#003a68',
          800: '#002e53',
          900: '#002644',
        },
        'imob-orange': {
          50: '#fff9f2',
          100: '#fff3e6',
          200: '#ffe0c0',
          300: '#fece9a',
          400: '#fea94e',
          500: '#fd8402',
          600: '#e47702',
          700: '#be6302',
          800: '#984f01',
          900: '#7c4101',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
