/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(247,245,244,255)',
        'secondary': 'rgba(238,234,231,255)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      placeholderColor: {
        'danger': 'rgba(255,255,255)',
        'focus': 'rgba(70, 77, 59)',
        'hover': 'rgba(70, 77, 59)',
        'active': 'rgba(70, 77, 59)',
      },
    },
    variants: {
      placeholderColor: ['focus', 'hover', 'active']
    }
  },
  plugins: [],
}
