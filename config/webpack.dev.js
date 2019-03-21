const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const { PORT } = require('./config')
const base = require('./webpack.common.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    compress: true, // 一切服务都启用gzip 压缩
    host: 'localhost',
    port: PORT,

    // open: true,                                         // 自动打开浏览器
    hot: true, // 开启热更新，只监听js文件，所以css假如被抽取后，就监听不到了
    inline: true, // 启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台

    // proxy: xxx                                       //接口代理配置
    // 和friendly-errors-webpack-plugin配合,但webpack自身的错误或警告在控制台不可见。
    quiet: true,
    clientLogLevel: 'none', // 阻止打印那种搞乱七八糟的控制台信息
    // historyApiFallback: true,//开发单页应用时有用，依赖于HTML5 history API，设为true时所有跳转将指向index.html
  },
  plugins: [

    // webpack内置的热更新插件
    new webpack.HotModuleReplacementPlugin(),

    // 解决hash变化
    new webpack.HashedModuleIdsPlugin(),

    // 简化控制台输出
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${PORT}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation'],
      },

      // 是否应在每次编译之间清除控制台
      clearConsole: true,
      onErrors: function(severity, errors) {

        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },

      // 添加格式化程序和转换器（见下文）
      additionalFormatters: [],
      additionalTransformers: [],
    }),
  ],
})
