/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function (helpers) {
			dataStateVariant('open', helpers)
			dataStateVariant('closed', helpers)
			dataStateVariant('on', helpers)
			dataStateVariant('checked', helpers)
			dataStateVariant('unchecked', helpers)
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.section-gradient': {
					background:
						'linear-gradient(90deg, #465EF4 34.08%, rgba(70, 94, 244, 0) 104.8%)',
				},
			})
		}),
	],
}

function dataStateVariant(
	state,
	{
		addVariant, // for registering custom variants
		e, // for manually escaping strings meant to be used in class names
	}
) {
	addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(
				`data-state-${state}${separator}${className}`
			)}[data-state='${state}']`
		})
	})

	addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.group[data-state='${state}'] .${e(
				`group-data-state-${state}${separator}${className}`
			)}`
		})
	})

	addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.peer[data-state='${state}'] ~ .${e(
				`peer-data-state-${state}${separator}${className}`
			)}`
		})
	})
}
