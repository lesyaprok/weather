module.exports = {
  root: true,
  env: {
    node: true,
    "es6": true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  'extends': [
    "airbnb-base",
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    "parser": "babel-eslint"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "quotes": ["error", "single"],
    "import/extensions": "off",
    "template-curly-spacing": "off",
    indent: "off",
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state"
        ]
      }
    ]
  },
}
