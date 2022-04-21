/* eslint-disable global-require */
module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'nice-blue': '#4c8ebc',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-debug-screens')],
  purge: ['./src/**/*.js', './src/**/*.njk', './src/**/*.svg'],
};
