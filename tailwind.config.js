/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // min-width 斷點
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',

        // max-width 斷點
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1025px' },
        'max-xl': { max: '1279px' }
      },
      backgroundImage: {
        pc: "url('./src/assets/images/bg.jpg')"
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
        red2: 'ED6F69',
        green: {
          1: '#ebe5ba',
          2: '#BDB890',
          3: '#87835d',
          4: '#6f6d55'
        },
        white: {
          1: '#FFFDF6'
        },
        orange: {
          1: '#F9BC75'
        },
        brown: {
          1: '#A56D2B'
        }
      },
      spacing: {
        15: '60px',
        27: '108px',
        34: '136px',
        35: '140px'
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-in-out none'
      }
    }
  },
  plugins: []
}
