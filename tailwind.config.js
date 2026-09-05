/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0d0e12',
        'surface-elevated': '#16181f',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-focus': 'rgba(255, 255, 255, 0.22)',
        apple: {
          blue: '#0A84FF',
          'blue-hover': '#0071E3',
          gray: '#86868B',
          'gray-light': '#A1A1A6',
          dark: '#000000',
          card: 'rgba(255, 255, 255, 0.04)',
          'card-hover': 'rgba(255, 255, 255, 0.07)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      borderRadius: {
        'ios': '20px',
        'ios-lg': '28px',
        'ios-xl': '36px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
