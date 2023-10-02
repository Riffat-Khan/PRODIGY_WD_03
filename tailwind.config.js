/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        '549ba0': '#549ba0',
      },
    },
    animation: {
      'running-text': 'running-text 10s linear infinite',
    },
    keyframes: {
      'running-text': {
        '0%': {
          transform: 'translateX(100%)',
        },
        '100%': {
          transform: 'translateX(-100%)',
        },
      },
    },
  },
  plugins: [],
}
