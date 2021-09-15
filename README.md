# My-Pokedex
My Pokedex app that displays Pokemon information

IDE used: Visual Studio Code Version 1.60.0

Linter(s) used: ESLint with Prettier
.eslintrc file contains:
{
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "quotes": ["error", "single"],
		"no-var": ["error"]
  },
	"parser": "@babel/eslint-parser"
}

.prettierrc file contains:
{
  "tabWidth": 2,
  "useTabs": false,
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.formatOnSave": true}
}

API: https://pokeapi.co/api/v2/pokemon/?limit=180
