/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-purple': '#25233A',
      'light-purple': '#383358',
      'light-green': '#00FF85',
      'white-fb': '#FBFBFB'
    },
    extend: {
      boxShadow: {
        'primary': '2px 2px 10px 0px rgba(0, 0, 0, 0.2)',
      },
      minHeight: {
        'tela': 'calc(100vh - (64px * 2))'
      },
      screens: {
        'mobile': '475px'
      }
    },

  },
  plugins: [],
}
