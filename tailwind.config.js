/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      }
    },
    animation: {
      'fade-in-bottom': 'fade-in-bottom 0.7s ease-out',
    },
    keyframes: {
      'fade-in-bottom': {
        '0%': {
          opacity: '0',
          transform: 'translateY(30px)', // Move from bottom
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)', // Move to original position
        },
      },
    },
    
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
}

