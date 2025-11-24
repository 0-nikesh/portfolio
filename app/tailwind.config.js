/***** @type {import('tailwindcss').Config} *****/
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Orbitron', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        base: {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          700: '#2a2a2a',
          900: '#0a0a0a'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,255,255,0.08) inset, 0 0 24px rgba(255,255,255,0.08)'
      }
    }
  },
  plugins: [],
};
