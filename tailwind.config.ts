
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Brutalist color palette
				neon: {
					blue: '#00FFFF',
					magenta: '#FF00FF',
				},
				brutal: {
					black: '#000000',
					white: '#FFFFFF',
					gray: '#1a1a1a',
				}
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
				brutal: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'typewriter': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'noise': {
					'0%': { opacity: '0.02', transform: 'translateX(0)' },
					'10%': { opacity: '0.05', transform: 'translateX(-1px)' },
					'20%': { opacity: '0.03', transform: 'translateX(1px)' },
					'30%': { opacity: '0.06', transform: 'translateX(0)' },
					'40%': { opacity: '0.02', transform: 'translateX(1px)' },
					'50%': { opacity: '0.08', transform: 'translateX(-1px)' },
					'60%': { opacity: '0.04', transform: 'translateX(0)' },
					'70%': { opacity: '0.07', transform: 'translateX(1px)' },
					'80%': { opacity: '0.03', transform: 'translateX(-1px)' },
					'90%': { opacity: '0.05', transform: 'translateX(0)' },
					'100%': { opacity: '0.02', transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typewriter': 'typewriter 3s steps(30, end) forwards',
				'glitch': 'glitch 0.3s infinite',
				'noise': 'noise 2s infinite linear',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
