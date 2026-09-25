/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#050816', paper: '#eef4ff', accent: '#3b82f6', muted: '#8b9ab9' },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: { glow: '0 24px 80px rgba(59,130,246,.22)' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      animation: { marquee: 'marquee 28s linear infinite', float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
