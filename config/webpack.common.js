const rules = require('./rules')
const plugins = require('./plugins')
const resolve = require('./resolve')
const optimization = require('./optimization')
const { ENTRY, ROOT_PATH, OUTPUT } = require('./config')

module.exports = {
  context: ROOT_PATH,
  entry: ENTRY,
  output: OUTPUT,

  // 仅在发生错误或新编译时输出
  // stats: 'minimal',
  module: {

    // 不依赖其他库的库，不需要解析他们
    // noParse: //,
    rules,
  },
  plugins,
  resolve,

  // 去重和分离 chunk
  optimization,
}
