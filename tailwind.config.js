/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.6rem',
      },
      colors: {
        primary: '#004AAD',
        secondary: '#0085C2',
        tertiary: '#FF6F61',
      },
      backgroundImage: {
        'primary-secondary-gradient': 'linear-gradient(to right, rgba(0, 74, 173, 1), rgba(0, 133, 194, 1))', // #004AAD, #0085C2
        'primary-tertiary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(255, 111, 97, 1))', // #0085C2, #FF6F61

        'secondary-primary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(0, 74, 173, 1))', // #0085C2, #004AAD
        'secondary-tertiary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(255, 111, 97, 1))', // #0085C2, #FF6F61

        'tertiary-primary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(0, 74, 173, 1))', // #FF6F61, #004AAD
        'tertiary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(255, 111, 97, 1))', // #FF6F61, #FF6F61
        'tertiary-secondary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(0, 133, 194, 1))', // #FF6F61, #0085C2

      },
    },
  },
  plugins: [],
};
