/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			'pink-dark': '#7D298A',
			'white': '#FFFFFF',
		extend: {},
	},
},
	plugins: [
		require('daisyui'),
	],
}

   