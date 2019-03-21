// 需要保持@babel/env是第一个元素
// babel.legacy中通过 presets[0][1]修改target
const presets = [
  ['@babel/preset-react'],
  ['@babel/preset-typescript'],
  [
    '@babel/env',
    {

      // 将使用的目标浏览器/插件和在 数据插件版本 中指定的版本用 console.log 输出。
      debug: true,

      // 是否使用 loose mode，默认为 false
      loose: false,

      // 将 ES6 module 转换为其他模块规范，可选 "adm" | "umd" | "systemjs" | "commonjs" | "cjs" | false，默认为 false
      modules: false,

      // 启用更符合规范的转换，但速度会更慢，默认为 false
      spec: false,
      targets: {

        // 如果你的目标浏览器支持 es modules 特性，browsers 选项则会失效
        esmodules: true,

        // "node": "current",
        // "browsers": [
        //   'Chrome >= 60',
        //   'Safari >= 10.1',
        //   'iOS >= 10.3',
        //   'Firefox >= 54',
        //   'Edge >= 15',
        // ],
      },
      useBuiltIns: 'usage',
    },
  ],
]

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false, // 不编译为commonjs
    },
  ],
  [
    'styled-jsx/babel',
    {
      sourceMaps: 'development' === process.env.NODE_ENV,
      vendorPrefixes: true,
    },
  ],
]

module.exports = {
  presets,
  plugins,
  babelrc: false,
}
