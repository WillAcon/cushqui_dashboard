const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./components/**/*.{html,js}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
	],
	// purge: {
	// 	content: [
	// 		"./src/**/*.html",
	// 		"./src/**/*.svelte"
	// 	  ],
	// 	  enabled: false
	// },
	// https://tailwindcss.com/docs/customizing-colors
	theme: {
		screens: {
			'xs': '320px',
			// => @media (min-width: 320px) { ... }
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			white: '#FFFFFF',
			// bg_body: '#f1f5fbd9',
			bg_body: 'black',
			cream: {
				
			},
			gray: {
				100: '#f3f4f6',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
				950: '#030712'
			},
			olive: {
				200: 'xxxxxx',
				200: 'xxxxxx',
				200: 'xxxxxx',
				200: 'xxxxxx',
				
			},
			green: {
				100: '#dcfce7',
				200: '#bbf7d0',
				300: '#86efac',
				400: '#4ade80',
				500: '#14b8a6',
				600: '#16a34a',
				700: '#15803d',
			},
			yellow:{
				100: '#fef9c3',
				200: '#fef08a',
				300: '#fde047',
				400: '#facc15',
				500: '#eab308',
				600: '#ca8a04',
				700: '#a16207',
			},
			steel: {

			},
			leaf: {
			},
			purple:{
				100: '#f3e8ff',
				200: '#e9d5ff',
				300: '#d8b4fe',
				400: '#c084fc',
				500: '#a855f7',
				600: '#9333ea',
				700: '#7e22ce',
				800: '#6b21a8',
				900: '#581c87',
			},
			orange:{
				500: '#f97316'
			},
			indigo:{
				100: '#e0e7ff',
				200: '#c7d2fe',
				300: '#a5b4fc',
				400: '#818cf8',
				500: '#6366f1',
				600: '#4f46e5',
				700: '#4338ca',
			},
			blue:{
				100: '#dbeafe',
				200: '#bfdbfe',
				300: '#93c5fd',
				400: '#60a5fa',
				500: '#3b82f6',
				600: '#2563eb',
				700: '#1d4ed8',
			},
			red:{
				100: '#fee2e2',
				200: '#fecaca',
				300: '#fca5a5',
				400: '#f87171',
				500: '#ef4444',
				600: '#dc2626',
				700: '#b91c1c',
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			zIndex: {
				'999':999,
				'998':998,
				'111':111

			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('flowbite/plugin')
	],
	darkMode: 'class',
};