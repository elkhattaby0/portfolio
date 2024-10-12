/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        green: 'var(--green)',
        blue: 'var(--blue)',
        black: 'var(--black)',
      },
    },
  },
  plugins: [],
}

