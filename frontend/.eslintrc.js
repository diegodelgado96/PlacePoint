module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
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
