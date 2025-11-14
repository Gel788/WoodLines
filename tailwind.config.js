/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8ddd0',
          300: '#d4c2a8',
          400: '#b89d7a',
          500: '#9d7a5a',
          600: '#8a6649',
          700: '#72523d',
          800: '#5e4434',
          900: '#4f392d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}

