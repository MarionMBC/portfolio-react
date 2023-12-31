/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      darkMode: 'class',
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        floating: 'floating 4s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        floating: {
          '0%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(2%)' },
          '50%': { transform: 'translateY(4%)' },
          '75%': { transform: 'translateY(2%)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

