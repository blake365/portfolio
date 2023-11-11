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
				beige: '#E6DBC6',
				bluegray: '#5A6F79',
				brown: '#B57D43',
				darkgreen: '#847F47',
				darkergreen: '#908660',
				earthpink: '#DAA38B',
				uviolet: '#545775',
			},
		},
	},
	plugins: [],
}
