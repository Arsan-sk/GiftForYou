import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-deep': 'var(--bg-deep)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        gold: 'var(--accent-gold)',
        terra: 'var(--accent-terracotta)',
        forest: 'var(--accent-forest)'
      },
      fontFamily: {
        display: ['var(--font-fraunces)'],
        sans: ['var(--font-sora)']
      },
      boxShadow: {
        soft: '0 18px 55px rgba(43, 38, 34, 0.09)'
      }
    }
  },
  plugins: []
};

export default config;