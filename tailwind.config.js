/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: {
          950: '#22201D', // Primary background (deep warm charcoal)
          900: '#2C2926', // Secondary surface (card backgrounds)
          850: '#33302C', // Inner panels
          800: '#3B3833', // Primary dark palette swatch (#3B3833) - Elevated cards / borders
          700: '#56504A', // Muted borders / screws
          600: '#7E776F', // Subtitle muted
          500: '#B2AAA0', // Body text
          300: '#DFD7CC', // Light warm accent
          200: '#EFE9DF', // Light secondary
          100: '#FFF8F0', // Headings / off-white nameplate (#FFF8F0)
        },
        copper: {
          300: '#F49487',
          400: '#EA7262',
          500: '#E05D4F', // Primary coral/terracotta accent (#E05D4F)
          600: '#C34537',
          700: '#9C3226',
          800: '#6F2119',
        },
        bakelite: {
          300: '#90A0BD',
          400: '#7788A6',
          500: '#617290', // Secondary slate/steel blue accent (#617290)
          600: '#4B5B76',
          700: '#374358',
          800: '#252E3D',
        },
        coral: {
          300: '#F49487',
          400: '#EA7262',
          500: '#E05D4F',
          600: '#C34537',
        },
        slate: {
          300: '#90A0BD',
          400: '#7788A6',
          500: '#617290',
          600: '#4B5B76',
        },
        status: {
          fixed: '#5E9A68',
          diagnosing: '#E05D4F',
          stuck: '#C85144',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', '"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'chassis-inset': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4), inset 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'chassis-raised': '0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.04)',
        'amber-glow': '0 0 15px rgba(224, 93, 79, 0.35)',
        'teal-glow': '0 0 15px rgba(97, 114, 144, 0.35)',
        'coral-glow': '0 0 15px rgba(224, 93, 79, 0.4)',
        'slate-glow': '0 0 15px rgba(97, 114, 144, 0.4)',
      },
      backgroundImage: {
        'metal-texture': 'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
