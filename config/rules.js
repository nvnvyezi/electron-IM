const path = require('path')

const { ENTRY_PATH } = require('./config')

const common = {
  include: ENTRY_PATH,
  exclude: /node_modules/,
}

const rules = [
  {
    test: /\.(jsx?|tsx?)$/,
    enforce: 'pre',
    include: path.resolve(__dirname, './src'),
    exclude: /node_modules/,
    use: [
      {
        loader: 'eslint-loader',
        options: { fix: true },
      },
    ],
  },
  {
    test: /\.(jsx?)|(tsx?)$/,
    ...common,
    use: [
      {
        loader: 'babel-loader?cacheDirectory',
        options: require('./base'),
      },
    ],
  },
  {
    test: /\.html$/,
    ...common,
    use: [
      {
        loader: 'html-loader',
        options: { minimize: true },
      },
    ],
  },
  {
    test: /\.(c|le)ss$/,
    ...common,
    use: 'happypack/loader?id=css',
  },
  {
    test: /\.(png|jpg|gif|svg)/,
    ...common,
    use: [
      {

        // 小图片转为DataURL
        loader: 'url-loader',
        options: { limit: 8192 },
      },
    ],
  },

  // {
  //   test: /.(eot|ttf|woff|woff2)$/,
  //   use: 'url-loader'
  // },
]

module.exports = rules
