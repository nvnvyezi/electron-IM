const path = require('path')

const resolve = {
  modules: ['../src/', 'node_modules'],

  // 配合tree-shaking，优先使用es6模块化入口（import）
  mainFields: ['jsnext:main', 'browser', 'main'],
  alias: {

    // '@': path.resolve(__dirname, '../src/'),
    Images: path.resolve(__dirname, '../src/assets/images/'),
  },
  extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
}

module.exports = resolve
