/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // OKLCH color system - Premium Editorial palette
        background: {
          light: 'oklch(98% 0 0)', // Off-white
          dark: 'oklch(20% 0 0)', // Deep charcoal
        },
        text: {
          primary: 'oklch(20% 0 0)', // Dark for light mode
          secondary: 'oklch(45% 0 0)', // Medium gray
          muted: 'oklch(65% 0 0)', // Light gray
          inverse: 'oklch(98% 0 0)', // Light for dark mode
        },
        accent: {
          purple: {
            50: 'oklch(95% 0.05 290)',
            100: 'oklch(90% 0.08 290)',
            200: 'oklch(85% 0.10 290)',
            300: 'oklch(75% 0.12 290)',
            400: 'oklch(65% 0.14 290)',
            500: 'oklch(60% 0.15 290)', // Primary brand purple
            600: 'oklch(55% 0.13 290)',
            700: 'oklch(45% 0.11 290)',
            800: 'oklch(35% 0.09 290)',
            900: 'oklch(25% 0.07 290)',
          },
        },
        border: {
          light: 'oklch(90% 0 0)',
          DEFAULT: 'oklch(85% 0 0)',
          dark: 'oklch(30% 0 0)',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-purple': '0 0 20px rgba(130, 71, 229, 0.3)',
        'glow-purple-lg': '0 0 30px rgba(130, 71, 229, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
