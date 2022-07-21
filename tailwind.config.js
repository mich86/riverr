/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '15px',
        '4': '18px',
        '5': '22px',
        '6': '30px',
        '7': '35px',
        '8': '55px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#000000',
        'white': '#ffffff',
        'red': '#881024',
        'grey': {
          100: '#6c757d',
          500: '#f1f1f1',
          900: '#656565',
        },
      },
      fontSize: {
        xs: ['0.5rem', { lineHeight: '1.5rem' }], //8
        sm: ['0.75rem', { lineHeight: '1.5rem' }], //12
        md: ['0.938rem', { lineHeight: '1rem' }], //15
        base: ['1rem', { lineHeight: '1.5rem' }], //16
        lg: ['1.125rem', { lineHeight: '1.25rem' }], //18
        xl: ['1.375rem', { lineHeight: '1.75rem' }], //22
        '2xl': ['1.75rem', { lineHeight: '2rem' }], //28
      },
    },
  },
  plugins: [],
}