/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'main-01': '#171E3D',
				'main-02': '#111A35',
				'main-03': '#161B3B',
				highlight: '#F55C5F'
			},
			spacing: {
				"xs": "0.37em",
				"sm": "0.618em",
				"md": "1em",
				"lg": "1.618em",
				"xl": "2.6171em",
			}
		}
	},
	plugins: []
};
