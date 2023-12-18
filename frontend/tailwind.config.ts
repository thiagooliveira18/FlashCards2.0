import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#0A2647',
        'secundary': '#144272',
        '3th': '#205295',
        '4th': '#2C74B3'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#0A2647',
        'secundary': '#144272',
        '3th': '#205295',
        '4th': '#2C74B3'
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#0A2647',
        'secundary': '#144272',
        '3th': '#205295',
        '4th': '#2C74B3',
      }),
      dropShadow: {
          '3xl' : '0 35px 35px rgba(0,0,0,0.25)',
          '4xl' : '0 55px 55px rgba(0,0,0,0.3)',
      },
      boxShadow: {
        'r-shadow': '15px 0px 25px 0px rgba(0, 0, 0, 0.4)',
        '3xl': '0px 35px 60px 20px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
export default config
