/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': 'rgb(255, 253, 246)',
        'custom-hover-color':'rgb(235,229,186)',
        'custom-alert-color':'rgb(255,174,170)'
      },
      colors: {
        'custom-font-color': '#6F6D55',
      },
    }
  },
  plugins: []
}
