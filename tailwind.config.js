/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // primary safety amber/gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          accent: '#FF7A00',
        },
        slate: {
          850: '#151f32',
          900: '#0f172a',
          950: '#080d1a',
        },
        carolina: {
          redclay: '#B44C28', // Wake County native red clay tone
          forest: '#1E392A',
          steel: '#334155',
          gold: '#E5A919'
        }
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', '"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(245, 158, 11, 0.4)',
        'glow-clay': '0 0 35px -5px rgba(180, 76, 40, 0.3)',
      }
    },
  },
  plugins: [],
}
