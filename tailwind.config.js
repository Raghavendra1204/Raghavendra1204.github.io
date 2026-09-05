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
        background: '#090a0f',
        surface: '#11131a',
        'surface-elevated': '#181b24',
        border: '#232733',
        'border-focus': '#3b4254',
        accent: {
          DEFAULT: '#10b981', // subtle emerald
          hover: '#059669',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        tech: {
          blue: '#38bdf8',
          purple: '#a855f7',
          emerald: '#34d399',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
