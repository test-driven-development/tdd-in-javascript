module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'jest/no-disabled-tests': 'off',
    'jest/no-focused-tests': 'off',
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
