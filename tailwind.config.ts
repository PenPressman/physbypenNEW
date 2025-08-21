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
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Physics theme colors
				'physics-navy': 'hsl(var(--physics-navy))',
				'physics-red': 'hsl(var(--physics-red))',
				'physics-blue': 'hsl(var(--physics-blue))',
				'physics-gray': 'hsl(var(--physics-gray))',
				
				// Academic semantic colors
				'academic-highlight': 'hsl(var(--academic-highlight))',
				'academic-success': 'hsl(var(--academic-success))',
				'academic-warning': 'hsl(var(--academic-warning))',
				
				// Layout colors
				'content-bg': 'hsl(var(--content-bg))',
				'sidebar-bg': 'hsl(var(--sidebar-bg))',
				'nav-bg': 'hsl(var(--nav-bg))',
				'math-bg': 'hsl(var(--math-bg))',
				'code-bg': 'hsl(var(--code-bg))'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Source Serif Pro', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'Consolas', 'monospace']
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'quick': 'var(--transition-quick)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
