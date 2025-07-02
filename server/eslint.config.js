export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];