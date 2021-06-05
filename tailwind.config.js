module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0.9rem)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
       }
    },
  },
  variants: {
    extend: {},
  },
}
