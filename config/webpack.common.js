const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // context: path.resolve(__dirname, '..'),
  // entry不是必须
	entry: {
    login: path.resolve(__dirname, '../src/login/index'),
    test: path.resolve(__dirname, '../src/index')
  },
  output: {
    filename: devMode ? 'js/[name].[hash:8].js': 'js/[name].[chunkhash:8].js'
  },
  // 仅在发生错误或新编译时输出
  // stats: 'minimal',
  module: {
    // 不依赖其他库的库，不需要解析他们
    // noParse: //,
    rules: [
      {
        test: /\.(jsx?)|(tsx?)$/,
        include: path.resolve(__dirname, '../src/'),
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        include: path.resolve(__dirname, '../src/'),
        use: [
          {
            // 小图片转为DataURL
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // {
      //   test: /.(eot|ttf|woff|woff2)$/,
      //   use: 'url-loader'
      // },
    ]
  },
  plugins: [
    // 打包html
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // 清除dist
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: '[id].css'
    // }),
  ],
  resolve: {
    modules: [
      'node_modules'
    ],
    //配合tree-shaking，优先使用es6模块化入口（import）
    mainFields: ['jsnext:main', 'browser', 'main'],
    alias: {
      "@": path.resolve(__dirname, '../src/'),
      Images: path.resolve(__dirname, '../src/assets/images/')
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  },
}