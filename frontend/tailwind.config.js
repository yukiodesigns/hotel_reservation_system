/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

