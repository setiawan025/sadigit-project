/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-blue': {
          100: '#E9E3FF',
          200: '#B9A2FF',
          300: '#9374FF',
          400: '#7551FF',
          500: '#4318FF',
          600: '#3311DB',
          700: '#2100B6',
          800: '#190793',
          900: '#11047A'
        },
        blue: {
          100: '#D7E3FF',
          200: '#AFC6FF',
          300: '#88A8FF',
          400: '#6A8EFF',
          500: '#3964FF',
          600: '#294DDB',
          700: '#1C38B7',
          800: '#122693',
          900: '#0A197A'
        }
      }
    }
  },
  plugins: []
}
