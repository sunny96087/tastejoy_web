/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pc: "url('/src/images/bg.jpg')"
      },
      backgroundColor: {
        'custom-color': 'rgb(255, 253, 246)',
        'custom-hover-color': 'rgb(235,229,186)',
        'custom-alert-color': 'rgb(255,174,170)',
        'custom-switch-color': 'rgb(247,246,241)'
      },
      colors: {
        'custom-font-color': '#6F6D55',
        'custom-switch-color': 'rgb(164,157,125)',
        green1: '#EBE5BA',
        green2: 'rgba(189, 184, 144, 1)',
        green3: '#87835D',
        green4: '#6F6D55',
        green5: '#494839',
        red1: '#FFAEAA',
        red2: 'ED6F69'
      }
    }
  },
  plugins: []
}
