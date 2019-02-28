const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 按入口js打包css
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer)
  } else if (m.name) {
    return m.name
  }
  return false
}

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  output: { path: path.resolve(__dirname, '../dist') },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        include: path.resolve(__dirname, '../src/'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },

  // 去重和分离 chunk
  optimization: {

    // 分离webpack运行时的引导代码
    runtimeChunk: 'single',
    splitChunks: {

      // 'all'|'async'|'initial'(全部|按需加载|初始加载)的chunks
      chunks: 'all',

      // 最大异步请求数， 默认1
      // maxAsyncRequests: 1,
      // 最大初始化请求书，默认1
      // maxInitialRequests: 1,
      cacheGroups: {

        // 分离第三方库
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'modules-utils',
          chunks: 'all',

          // 设置优先级，防止和自定义公共代码提取时被覆盖，不进行打包
          priority: 10
        },
        indexStyles: {
          name: 'index',
          test: (m, c, entry = 'index') => 'CssModule' === m.constructor.name && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true
        },
        otherStyles: {
          name: 'another',
          test: (m, c, entry = 'another') => 'CssModule' === m.constructor.name && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },

        // 抽离自己写的公共代码，utils这个名字可以随意起
        utils: {
          chunks: 'all',
          name: 'users-utils',

          // 只要超出0字节就生成一个新包
          minSize: 0,

          // 至少两个chucks用到
          minChunks: 2,

          // 最大异步请求数， 默认1
          // maxAsyncRequests: 1,
          // 最大初始化请求书，默认1
          maxInitialRequests: 5
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({

      // css内容不变不重复构建
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
})
