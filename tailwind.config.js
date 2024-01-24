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
          primary: '#5C8374',
          secondary: '#9EC8B9',
          accent: '#1B4242',
          neutral: '#092635',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
