/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        18: '4.5rem'
      },
      fontSize: {
        '1xs': '0.5rem'
      },
      width: {
        28.5: '7.375rem'
      },
      maxWidth: {
        430: '428px',
        540: '540px',
        920: '920px',
        screen: '100vw'
      },
      minWidth: {
        280: '280px',
        230: '230px'
      },
      borderRadius: {
        '5xl': '2.5rem'
      },
      colors: {
        neutral: {
          black: '#09101D',
          light: '#FAFAFA',
          1: '#2C3A4B',
          2: '#394452',
          3: '#545D69',
          4: '#6D7580',
          5: '#858C94',
          6: '#A5ABB3',
          7: '#DADEE3',
          8: '#E4E4E4',
          9: '#EDEDED',
          white: '#FEFEFE'
        },
        'action-neutral': {
          1: '#E6E6E6',
          2: '#E7E7E7',
          'data-1': '#3389FE',
          'data-2': '#F2C94C',
          'data-3': '#219653',
          'data-4': '#D86500',
          'data-5': '#FFD100'
        },
        primary: {
          default: '#0055D0',
          hover: '#0235FF',
          disabled: '#99BBEC',
          'hover-10': 'rgba(0, 46, 230, 0.1)',
          'active-70': 'rgba(0, 85, 208, 0.7)',
          links: '#3389FE',
          visited: '#50CFE6',
          blue: '#1B7AB7',
          'blue-light': '#03A1A6',
          'blue-dark': '#002A76',
          orange: '#ED9527',
          pink: '#EF2F78',
          'pink-dark': '#9F5F80',
          green: '#2DA52B',
          purple: '#B754F3',
          gray: '#A1A2A4',
          yellow: '#FFCC29',
          red: '#EF4F4F',
          'purple-dark': '#312C51',
          black: '#394452',
          // PENYETARAAN SIA
          link: '#3389FE'
        },
        secondary: {
          default: '#EAEAFF',
          hover: '#D6D6FF',
          'hover-10': 'rgba(224, 224, 255, 0.1)',
          active: '#E0E0FF',
          disabled: 'rgba(224, 224, 255, 0.5)',
          'active-20%': 'rgba(224, 224, 255, 0.2)',
          'background-1': '#F4F4F4',
          'background-2': '#E7E7E7',
          blue: '#034694',
          black: '#09101D',
          gray: '#BABEC3',
          'blue-dark': '#002A76'
        },
        status: {
          success: '#287D3C',
          'success-light': '#EDF9F0',
          warning: '#FA8C16',
          'warning-light': '#FFF4EC',
          error: '#DA1414',
          'error-light': '#FEEFEF',
          info: '#003594',
          'info-light': '#EEF2FA',
          gold: '#FAAD14',
          'gold-light': '#FFF4D1',
          required: '#FF2524'
        }
      },
      boxShadow: {
        primary: '8px 8px 50px #D9D9D9, -8px -8px 50px #FFFFFF',
        icon: '0px 4px 20px rgba(45, 165, 43, 0.2)',
        button: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        logo: '4px 6px 20px 1px rgba(210, 210, 210, 0.25)',
        focus: '0px 0px 1px 3px rgba(0, 85, 208, 0.1)',
        'focus-bot': '0px 2px 4px #0055D0'
      }
    }
  },
  plugins: []
}
