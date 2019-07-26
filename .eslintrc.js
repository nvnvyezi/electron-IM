module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: { browser: true, commonjs: true, es6: true, node: true, worker: true },
  // 这里填入你的项目需要的全局变量
  globals: {
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    // 解决webpack alias 找不到模块 问题
    'import/resolver': {
      alias: {
        map: [['Images', './src/assets/images/']],
      },
    },
  },
  // 这里填入你的项目需要的个性化配置，比如：
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-max-props-per-line': 0,
    // 第一个 prop 必须得换行
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    // props 缩进必须为二个空格
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    // 数组中的 jsx 必须有 key
    'react/jsx-key': 2,
    // jsx 中禁止使用 bind
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    // 多行的 jsx 必须有括号包起来
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': [1, 'always'],
    semi: 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      { vars: 'local', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
}
