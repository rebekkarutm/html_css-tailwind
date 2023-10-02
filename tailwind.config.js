/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'col1': '#463F3A',
      'col2': '#8A817C',
      'col3': '#BCB8B1',
      'col4': '#F4F3EE',
      'col5': '#E0AFA0',
      'col6': '#1E1E1E'
    },
    screens: {
      'xs' : {'max': '433px'},

      'sm': '434px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2p"'],
        'play': ["Play"],
        'noto-sans-linear': ['"Noto Sans Linear B"']
      }
    },
  },
  plugins: [],
}
