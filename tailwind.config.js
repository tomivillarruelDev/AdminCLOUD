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
        quaternary: '#FFCC00'
      },
      backgroundImage: {

        'primary-secondary-gradient': 'linear-gradient(to right, rgba(0, 74, 173, 1), rgba(0, 133, 194, 1))', //  #004AAD, #0085C2
        'primary-tertiary-gradient': 'linear-gradient(to right, rgba(0, 74, 173, 1), rgba(255, 111, 97, 1))', // #004AAD, #FF6F61
        'primary-quaternary-gradient': 'linear-gradient(to right, rgba(0, 74, 173, 1), rgba(255, 204, 0, 1))', // #004AAD, #FFCC00

        'secondary-primary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(0, 74, 173, 1))', // #0085C2, #004AAD
        'secondary-tertiary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(255, 111, 97, 1))', // #0085C2, #FF6F61
        'secondary-quaternary-gradient': 'linear-gradient(to right, rgba(0, 133, 194, 1), rgba(255, 204, 0, 1))', // #0085C2, #FFCC00

        'tertiary-primary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(0, 74, 141, 1))', // #FF6F61, #004A8D
        'tertiary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(128, 0, 128, 1))', // #FF6F61, #800080
        'tertiary-secondary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(0, 74, 173, 1))', // #FF6F61, #0085C2
        'tertiary-quaternary-gradient': 'linear-gradient(to right, rgba(255, 111, 97, 1), rgba(255, 204, 0, 1))', // #FF6F61, #FFCC00

        'quaternary-primary-gradient': 'linear-gradient(to right, rgba(255, 204, 0, 1), rgba(0, 74, 173, 1))', // #FFCC00, #004AAD
        'quaternary-secondary-gradient': 'linear-gradient(to right, rgba(255, 204, 0, 1), rgba(0, 133, 194, 1))', // #FFCC00, #0085C2
        'quaternary-tertiary-gradient': 'linear-gradient(to right, rgba(255, 204, 0, 1), rgba(255, 111, 97, 1))' // #FFCC00, #FF6F61
      },
    },
  },
  plugins: [],
};
