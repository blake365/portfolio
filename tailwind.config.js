/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				beige: '#E9DFCD',
				bluegray: '#5A6F79',
				brown: '#B57D43',
				darkgreen: '#847F47',
				darkergreen: '#6A6031',
			},
		},
	},
	plugins: [],
}
