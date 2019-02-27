const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const TSLintPlugin = require('tslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const base = require('./webpack.common.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, '../dist'),    //服务路径，存在于缓存中
    compress: true,                                     //一切服务都启用gzip 压缩
    // host: 'localhost',                                  // 默认是localhost
    port: 3000,                                         // 端口
    // open: true,                                         // 自动打开浏览器
    hot: true,                                          // 开启热更新，只监听js文件，所以css假如被抽取后，就监听不到了
    inline: true,            //启用内联模式，一段处理实时重载的脚本被插入到bundle中，并且构建消息会出现在浏览器控制台
    // proxy: xxx                                       //接口代理配置
    //和friendly-errors-webpack-plugin配合,但webpack自身的错误或警告在控制台不可见。
    quiet: true,
    clientLogLevel: "none",                             //阻止打印那种搞乱七八糟的控制台信息
    // historyApiFallback: true,//开发单页应用时有用，依赖于HTML5 history API，设为true时所有跳转将指向index.html
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        include: path.resolve(__dirname, '../src/'),
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            // options: {
            //   configuration: {
            //     rules: {
            //       quotemark: [true, 'double']
            //     }
            //   },
            //   //可以指定相对于当前目录或以绝对路径的自定义配置文件
            //   // 'tslint-custom.json' 
            //   configFile: false,
            //   // slint错误默认显示为警告
            //   // 将EmitErrors设置为true以将其显示为错误
            //   emitErrors: true,
            //   // 默认情况下，tslint不会中断编译
            //   // 如果您希望任何带有tslint错误的文件失败
            //   // 将failonhint设置为true
            //   failOnHint: true,
            //   // 启用类型检查规则，如“for in array”
            //   // 使用当前工作目录中的tsconfig.json
            //   typeCheck: true,
            //   // 自动修复起毛错误
            //   fix: true,
            //   // 可以指定相对于当前目录的自定义tsconfig文件，或者指定与类型检查规则一起使用的绝对路径
            //   tsConfigFile: 'tsconfig.json',
            //   // 格式化程序的名称（可选）
            //   // formatter: 'yourformatter',
            //   // 包含格式化程序的目录路径（可选）
            //   // formattersDirectory: 'node_modules/tslint-loader/formatters/',
            //   // // 如果要将输出保存到持续集成服务器的文件中，这些选项非常有用。
            //   // fileOutput: {
            //   //     // 保存每个文件报告的目录
            //   //     dir: './foo/',
            //   //     // 用于每个报表文件名的扩展名。默认为“txt”
            //   //     ext: 'xml',
            //   //     // 如果为true，则在运行开始时从报告目录中删除所有文件
            //   //     clean: true,
            //   //     // 要包含在每个报表文件顶部的字符串。对于某些报表格式很有用。
            //   //     header: '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',
            //   //     // 要包含在每个报表文件底部的字符串。对于某些报表格式很有用。
            //   //     footer: '</checkstyle>'
            //   // }
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    // webpack内置的热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 解决hash变化
    new webpack.HashedModuleIdsPlugin(),
    // 简化控制台输出
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      // 是否应在每次编译之间清除控制台
      clearConsole: true,
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // 添加格式化程序和转换器（见下文）
      additionalFormatters: [],
      additionalTransformers: []
    })
  ]
})