module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:compat/recommended',
    'plugin:sonarjs/recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  overrides: [{
      env: {
        jest: true,
      },
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)', '**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['sort-class-members', 'sonarjs', 'sort-keys-fix', 'unused-imports'],
  root: true,
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sort-class-members/sort-class-members': [
      2,
      {
        accessorPairPositioning: 'getThenSet',
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' }],
    'vue/no-v-html': 'off',
  },
};