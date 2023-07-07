/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        cloud: 'url("/images/bg-cloud.png")',
        plant: 'url("/images/bg-plant.png")',
      },
      colors: {
        sky: {
          50: '#ebf2f9',
          100: '#c4d9ed',
          200: '#9dc0e2',
          300: '#76a7d6',
          500: '#4f8eca',
          600: '#3575b0',
          700: '#1d4162',
          800: '#12273b',
          900: '#060d14',
        },
        cornflower: {
          50: '#e6f0ff',
          100: '#b3d3fe',
          200: '#81b6fe',
          300: '#4e98fd',
          500: '#1c7bfd',
          600: '#0261e3',
          700: '#024cb1',
          800: '#01367e',
          900: '#000b19',
        },
        dodger: {
          50: '#e5e7ff',
          100: '#b3b8ff',
          200: '#8089ff',
          300: '#4d5aff',
          500: '#1a2bff',
          600: '#0012e6',
          700: '#000eb3',
          800: '#000a80',
          900: '#00021a',
        },
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
