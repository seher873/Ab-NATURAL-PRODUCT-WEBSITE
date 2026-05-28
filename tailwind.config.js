/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fefcf5',
          100: '#fdf8e8',
          200: '#faf0cc',
          300: '#f5e3a3',
          400: '#eed06f',
          500: '#e6bc44',
          600: '#d4a332',
          700: '#b08228',
          800: '#8c6626',
          900: '#735423',
        },
        sage: {
          50: '#f2f7f2',
          100: '#e0ede0',
          200: '#c2dcc2',
          300: '#99c399',
          400: '#6da36d',
          500: '#4a854a',
          600: '#3a6b3a',
          700: '#2f552f',
          800: '#284428',
          900: '#213821',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
