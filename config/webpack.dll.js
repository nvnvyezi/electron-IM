const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { DLL_OUTPUT_PATH, DLL_PATH, ROOT_PATH, DLL_CLEAN_PATH } = require('./config')

module.exports = {
  entry: ['react', 'react-dom'],
  output: {
    filename: 'MYDll.[name].js',
    path: DLL_OUTPUT_PATH,
    libraryTarget: 'this',
    library: '[name]_[hash]', // DLL的名字
  },
  plugins: [
    new CleanWebpackPlugin([DLL_CLEAN_PATH], { root: ROOT_PATH }),
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[hash]',
      path: DLL_PATH,
    }),
  ],
}
