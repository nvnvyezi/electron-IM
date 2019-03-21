const path = require('path')
const os = require('os')

const devMode = 'production' !== process.env.NODE_ENV

module.exports = {
  ENTRY_PATH: path.resolve(__dirname, '../src/'),
  ROOT_PATH: path.resolve(__dirname, '../'),
  OUTPUT_PATH: path.resolve(__dirname, '../dist/page'),
  DLL_OUTPUT_PATH: path.resolve(__dirname, '../dist/dll'),
  DLL_PATH: path.join(__dirname, '../dist/dll', 'vendor/[name]-manifest.json'),
  CLEAN_PATH: 'dist/page',
  DLL_CLEAN_PATH: 'dist/dll',
  FAVICON_PATH: path.resolve(__dirname, './favicon.ico'),
  CPU_NUM: os.cpus().length - 1,
  ENTRY: { renderer: path.resolve(__dirname, '../src/renderer/index') },
  OUTPUT: {
    filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[chunkhash:8].js',
    publicPath: 'http://localhost:3000/',
  },
}
