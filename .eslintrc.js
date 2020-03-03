// "off" or 0 - 关闭规则
// "warn" or 1 - 将规则视为一个警告（ 不会影响退出码）
// "error" or 2 - 将规则视为一个错误(退出码为1)
// 完整的规则列表：https://cn.eslint.org/docs/rules/

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    //使用推荐的React代码检测规范
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  globals: {},
  rules: {
    'react/prop-types': [0],
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-function-return-type': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
