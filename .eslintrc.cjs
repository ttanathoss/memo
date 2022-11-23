const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    React: 'readable',
    grecaptcha: 'readable',
    PriceSpider: 'readable',
  },
  rules: {
    camelcase: OFF,
    'no-restricted-exports': [ERROR, { restrictedNamedExports: [] }],
    'react/function-component-definition': [
      ERROR,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'class-methods-use-this': OFF,
    'no-nested-ternary': ERROR,
    'linebreak-style': OFF,
    'max-len': OFF,
    'consistent-return': [ERROR, { treatUndefinedAsUnspecified: false }],
    'object-curly-newline': OFF,
    'no-alert': WARN,
    'newline-before-return': ERROR,
    'no-confusing-arrow': OFF,
    'import/no-cycle': ERROR,
    'no-underscore-dangle': ERROR,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-new': ERROR,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': [ERROR],
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [OFF],
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/no-named-as-default': OFF,
    'import/prefer-default-export': OFF,
    'import/extensions': OFF,
    'import/no-unresolved': ERROR,
    'import/no-extraneous-dependencies': OFF,
    'import/first': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-duplicates': ERROR,
    'import/order': OFF,
    'simple-import-sort/imports': [
      ERROR,
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          // After builtins comes packages without space in between. `react` related packages first, then `gatsby`, then rest.
          // eslint-disable-next-line global-require
          [`^(${require('module').builtinModules.join('|')})(/|$)`, '^react', '^gatsby', '^@?\\w'],
          // Internal packages in order: layout, common, components, utils.
          ['^layout(/.*|$)', '^common(/.*|$)', '^components(/.*|$)', '^utils(/.*|$)'],
          // Then parent and siblings - order is kept thanks to alphabetical sorting.
          ['^\\.'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': ERROR,
    'jsx-a11y/click-events-have-key-events': ERROR,
    'jsx-a11y/no-noninteractive-element-interactions': ERROR,
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': ERROR,
    'jsx-a11y/label-has-for': [
      ERROR,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/destructuring-assignment': ERROR,
    'react/jsx-one-expression-per-line': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-danger': ERROR,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/jsx-props-no-spreading': [
      WARN,
      {
        custom: 'ignore',
      },
    ],
    'react/react-in-jsx-scope': OFF,
    'react/no-did-update-set-state': OFF,
    'react/state-in-constructor': OFF,
    'no-plusplus': ERROR,
    'no-undef': ERROR,
    'no-unused-expressions': OFF,
    '@typescript-eslint/no-unused-expressions': [ERROR],
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': [ERROR],
    '@typescript-eslint/no-explicit-any': ERROR,
    'prettier/prettier': [
      ERROR,
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 0,
      },
    },
    {
      // Special rule for Layout component to ensure global styles being imported before all other:
      // Global rule is Layout component being imported first and first thing it does is importing global styles
      files: ['Layout.tsx'],
      rules: {
        'simple-import-sort/imports': [
          ERROR,
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              // After builtins comes packages without space in between. `react` related packages first, then `gatsby`, then resst.
              [
                // eslint-disable-next-line global-require
                `^(${require('module').builtinModules.join('|')})(/|$)`,
                '^react',
                '^gatsby',
                '^@?\\w',
              ],
              // Style imports.
              ['^.+\\.s?css$'],
              // Internal packages in order: layout, common, components, utils.
              ['^layout(/.*|$)', '^common(/.*|$)', '^components(/.*|$)', '^utils(/.*|$)'],
              // Then parent and siblings - order is kept thanks to alphabetical sorting.
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src'],
      },
      alias: [
        ['layout', './src/layout'],
        ['common', './src/common'],
        ['components', './src/components'],
        ['screens', './src/screens'],
        ['pages', './src/pages'],
        ['styles', './src/styles'],
        ['mocks', './src/mocks'],
        ['utils', './src/utils'],
        ['utils', './src/testUtils'],
        ['hooks', './src/hooks'],
        ['templates', './src/templates'],
        ['types', './src/types'],
      ],
    },
  },
};
