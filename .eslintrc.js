module.exports = {
    env: {
      browser: true, // For frontend code
      es2021: true,
      node: true,    // For backend code and build scripts
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
      'prettier', // Make sure this is last to override other formatting rules
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
      ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
    },
    plugins: [
      'react',
      '@typescript-eslint',
      // 'jsx-a11y', // For accessibility rules in JSX, good to add later
      // 'import',   // For rules regarding import/export syntax
    ],
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    rules: {
      // You can override or add rules here. For example:
      // 'react/prop-types': 'off', // We'll use TypeScript for prop types
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Can be useful to turn off initially
    },
  };