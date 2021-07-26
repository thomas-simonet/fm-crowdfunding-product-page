const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [],
  theme: {
    extend: {
      opacity: {
        15: '0.15'
      }
    },
    fontFamily: {
      body: ['Commissioner']
    },
    colors: {
      cyan: {
        100: 'hsla(176, 72%, 28%, 0.05)',
        500: 'hsl(176, 50%, 47%)',
        900: 'hsl(176, 72%, 28%)'
      },
      gray: {
        200: 'hsla(0, 0%, 18%, 0.05)',
        300: 'hsl(0, 0%, 98%)',
        600: 'hsl(0, 0%, 69%)',
        700: 'hsl(0, 0%, 44%)',
        800: 'hsl(0, 0%, 48%)',
        900: 'hsl(0, 0%, 18%)'
      },
      white: colors.white,
      black: colors.black
    }
  },
  variants: {},
  plugins: []
}
