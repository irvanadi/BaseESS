const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			screens: {
				phone_s: "375px",
				phone_md: "390px",
			},
			colors: {
				light: "var(--light)",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				border_card: "var(--border_card)",
				background: "var(--background)",
				background_primary: "var(--background-primary)",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				primary_800: "var(--primary_800)",
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				muted_navbar: "var(--muted-foreground)",
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderWidth: {
				hairline: hairlineWidth(),
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				afacad: ["Afacad"],
				afacad_italic: ["Afacad_Italic"],
				afacad_medium: ["Afacad_Medium"],
				afacad_mediumitalic: ["Afacad_MediumItalic"],
				afacad_semibold: ["Afacad_SemiBold"],
				afacad_semibolditalic: ["Afacad_SemiBoldItalic"],
				Afacad_Bold: ["Afacad_Bold"],
				Afacad_BoldItalic: ["Afacad_BoldItalic"],
			},
			fontSize: {
				xs: ["0.75rem", "1rem"],
				sm: ["0.875rem", "1.5rem"],
				base: ["1rem", "1.25rem"],
				lg: ["1.125rem", "1.5rem"],
				xl: ["1.75rem", "2rem"],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
