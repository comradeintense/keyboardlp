/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-300': '#FF9B62',
				'accent-400': '#F16718',
				'neutral-200': '#E8EFF2',
				'neutral-500': '#7B8BAD',
				'neutral-800': '#162542',
			},
			fontFamily: {
				Barlow: ['Barlow', 'sans-serif'],
			},
			fontSize: {
				'fs-56': '3.5rem',
				'fs-48': '3rem',
				'fs-32': '2rem',
				'fs-24': '1.5rem',
				'fs-18': '1.125rem',
			},
			lineHeight: {
				'lh-26': '1.625rem',
				'lh-48': '3rem',
				'lh-36': '2.25rem',
			},
		},
	},
	plugins: [],
};
