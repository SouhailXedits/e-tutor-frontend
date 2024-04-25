module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // path to your tsconfig.json
  },
  ignorePatterns: ['node_modules/*', 'build/*', 'dist/*'],
  rules: {
    // your rules here
  },
};
