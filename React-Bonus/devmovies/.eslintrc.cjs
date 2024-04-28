module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react-hooks', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 80, // largura das linhas
        'tabWidth': 4, // tamanho do espaço de cada tab
        'singleQuote': true, // aspas simples
        'trailingComma': 'none', // virgula no fim da linha
        'arrowParens': 'always', // tratamento de arrow functions, se irá colocar o parenteses ou não
        'semi': false, // ponto e virgula no fim da linha
        'endOfLine': 'auto'
      }
    ],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always', // new line between groups
        'groups': [
          '/^react/',
          'module',
          '/^@shared/',
          [
            'parent',
            'sibling',
            'index'
          ],
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ]
  }
}