/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'insight-primary': '#1A365D',
        'insight-secondary': '#E2E8F0',
        'insight-accent': '#F59E0B',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}