const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily:{
      sans:['Graphik','sans-serif'],
      serif:['Merriweather', 'serif'],
    },
    extend: {
      colors:{"my-color":'#ff0000'}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
