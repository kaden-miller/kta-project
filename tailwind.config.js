/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FEF3C7',
        primary: '#FBBF24',
        'secondary-light': '#E0F2FE',
        secondary: '#BAE6FD',
        'accent-light': '#78697E',
        accent: '#331B3B',
        'neutral-light': '#FEE2E2',
        neutral: '#FCE7F3',
      },
    },
  },
  plugins: [],
}
