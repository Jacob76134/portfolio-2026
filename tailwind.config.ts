import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f2ec',
        stone: {
          border: '#ddd9d1',
        }
      },
      fontFamily: {
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6rem', { letterSpacing: '0.18em' }],
        'xs': ['0.65rem', { letterSpacing: '0.08em' }],
      },
    },
  },
} satisfies Config
