/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        companytheme: {
          primary: '#43766C',
          secondary: '#76453B',
          accent: '#B19470',
          neutral: '#F8FAE5',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
