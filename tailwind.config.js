module.exports = {
  content: ["./app/**/*.{html,ejs,js}"], // 必須得加上 js，不然動態 class 名稱會無效
  theme: {
    extend: {
      fontSize: {
        '40': '2.5rem',
        '32': '2rem',
        '80': '5rem',
      },
      lineHeight: { // 此次客製化規則，lh 10 以上，每差 10px 差 1 lh
        '4.1': '1.0625rem', /* 17px */
        '4.2': '1.125rem', /* 18px */
        '4.3': '1.1875rem', /* 19px */
        '6.1': '1.625rem', /* 26px */
        '7.1': '1.8125rem', /* 29px */
        '8.1': '2.1875rem', /* 35px */
        '10.1': '2.8125rem', /* 45px */
        '10.2': '2.875rem', /* 46px */
        '11': '3.125rem', /* 50px */
        '13': '4.375rem', /* 70px */
        '14.5': '5.3125rem', /* 85px */
      },
      borderWidth: {
        '16': '16px',
      },
      width: {
        '9/10': '90%',
        '5/4': '125%',
        '13.5': '3.375rem', /* 54px */
        '21.25': '5.3125rem', /* 85px */
        '47.5': '11.875rem',
      },
      height: {
        '4.5': '1.125rem', /* 18px */
        '58': '14.5rem', /* 232px */
        '84': '21rem', /* 336px */
        '86': '21.5rem', /* 344px */
        '93.5': '23.375rem', /* 374px */
        '109.75': '27.4375rem', /* 439px */
      },
      fontFamily: { // 空格記得要兩種引號
        'noto': ['"Noto Sans TC"',
          '"-apple - system"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Microsoft JhengHei"',
          '"Helvetica Neue"',
          'monospace',
          'Arial',
          'cursive',
          'sans-serif'],
        'paytone': ['"Paytone One"',
          '"-apple - system"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Microsoft JhengHei"',
          '"Helvetica Neue"',
          'monospace',
          'Arial',
          'cursive',
          'sans-serif'],
      },
      opacity: {
        '65': '0.65',
      },
      spacing: {
        '15.25': '3.8125rem', /* 61px */
        '18': '4.5rem', /* 72px */
        '33': '8.25rem', /* 132px */
        '37.5': '9.375rem', /* 150px */
        '93': '23.25rem', /* 372px */
        '101': '101%',
      },
      backgroundImage: {
        'logo': "url('../images/logo.svg')",
      },
      transitionProperty: {
        'height': 'height',
      },
      scale: {
        '10': '.1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    }),
  ],
}