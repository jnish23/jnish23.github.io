/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        teal: {
          accent: '#2DD4BF',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'dot-pattern':
          'radial-gradient(circle, rgba(45,212,191,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
      },
    },
  },
  plugins: [],
};
