module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['off'],
    'brace-style': ['error', 'stroustrup'],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['CustomInputLabel'],
      labelAttributes: ['label'],
      controlComponents: ['CustomInput'],
      depth: 3
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-access-state-in-setstate': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'react/jsx-uses-react': 'off',
    'react/sort-comp': 'off',
  }
};
