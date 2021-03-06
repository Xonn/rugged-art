module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        third: 'var(--color-third)',
        greyDarker: 'var(--color-grey-darker)',
        greyDark: 'var(--color-grey-dark)',
        grey: 'var(--color-grey)',
        greyLight: 'var(--color-grey-light)',
        greyLighter: 'var(--color-grey-lighter)',
      },
      fontFamily: {
        openSans: ['Open Sans'],
        bebas: ['Bebas'],
        minion: ['Minion'],
        futura: ['Futura'],
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      letterSpacing: {
        lg: '.135em',
        xl: '.227em',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark', 'responsive']
    },
  },
  plugins: [],
}
