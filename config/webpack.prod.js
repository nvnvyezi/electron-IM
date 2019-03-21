const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { OUTPUT_PATH, ROOT_PATH, CLEAN_PATH } = require('./config.js')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  output: { path: OUTPUT_PATH },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        include: path.resolve(__dirname, '../src/'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [

    // 清除dist
    new CleanWebpackPlugin([CLEAN_PATH], { root: ROOT_PATH }),
    new MiniCssExtractPlugin({

      // css内容不变不重复构建
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/dll/vendor/main-manifest.json'),
    }),
  ],
})
