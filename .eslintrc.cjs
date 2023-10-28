// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['src'],
  //     },
  //   },
  // },

  //   settings: {
  //     "import/resolver": {
  //       // node: {
  //       //   paths: ['src'],
  //       //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //       // },
  //       typescript: {
  //         project: path.resolve(__dirname),
  //       },
  //     },
  //   },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  //   project: './tsconfig.json',
  //   ecmaVersion: 'latest',
  //   tsconfigRootDir: __dirname,
  //   sourceType: 'module',
  // },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'consistent-return': 'error',
    'import/extensions': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'space-before-function-paren': 'off',
    'object-curly-newline': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'operator-linebreak': 'off',
    curly: ['error', 'all'],
    indent: 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
    'no-continue': 'off',
    'no-console': 'warn',
    'no-await-in-loop': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/camelCase': 'off',
    '@typescript-eslint/array-type': 'error',
    // '@typescript-eslint/no-explict-any': 'warn',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    // React Stuff
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state', 'acc'] },
    ],
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     patterns: [
    //       {
    //         group: ['@features/*/*', '!@features/*/types'],
    //       },
    //     ],
    //   },
    // ],
  },
};
