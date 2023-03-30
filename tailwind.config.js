/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        waveOut: {
          '0%': {
            'border-radius': '13rem',
            'border-top-left-radius': '2rem',
            'border-bottom-right-radius': '16rem'
          },
          '50%': {
            'border-radius': '12rem',
            'border-top-left-radius': '2rem',
            'border-bottom-right-radius': '17rem'
          },
          '100%': {
            'border-radius': '13rem',
            'border-top-left-radius': '2rem',
            'border-bottom-right-radius': '16rem'
          },
        },
        waveIn: {
          '0%': {
            'border-radius': '1rem',
            'border-top-left-radius': '1rem',
            'border-bottom-right-radius': '15rem'
          },
          '50%': {
            'border-radius': '3rem',
            'border-top-left-radius': '1rem',
            'border-bottom-right-radius': '27rem'
          },
          '100%': {
            'border-radius': '1rem',
            'border-top-left-radius': '1rem',
            'border-bottom-right-radius': '15rem'
          },
        }
      },
      animation: {
        'waving-wind-out': 'waveOut 2s linear infinite',
        'waving-wind-in': 'waveIn 2s linear infinite'
      },
    },
  },
  plugins: [],
}

