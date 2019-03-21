const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const HappyPack = require('happypack')

const plugins = [

  // 打包html
  new HtmlWebPackPlugin({
    title: '这是一个基础架子',
    template: './public/index.html',
    filename: './index.html',
    minify: { collapseWhitespace: true },
    hash: true, // 为了更好的 cache，可以在文件名后加个 hash。
  }),

  // 这些选项帮助快速启用 ServiceWorkers
  // 不允许遗留任何“旧的” ServiceWorkers
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  }),

  new HappyPack({
    id: 'css',
    loaders: ['style-loader', 'css-loader', 'less-loader'],
  }),
]

module.exports = plugins
