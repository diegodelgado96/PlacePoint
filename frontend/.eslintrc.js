module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,   // Soporte para entornos de navegador
		es2020: true,    // Soporte para ES2020
		node: true       // Soporte para variables globales de Node.js
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	rules: {
		'react/prop-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'react/react-in-jsx-scope': 'off', // no necesario con React 17+
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
