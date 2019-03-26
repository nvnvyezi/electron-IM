const { app, BrowserWindow } = require('electron')

const online = require('./online')
const onMinMax = require('./minMax')
const { browserOptions } = require('./config')

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC,window 会被自动地关闭
let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow(browserOptions)
  mainWindow.loadURL('http://localhost:7242')
  mainWindow.openDevTools()
  online()
  onMinMax(mainWindow)
  mainWindow.on('closed', () => {

    // 取消引用 window 对象，如果你的应用支持多窗口的话，通常会把多个 window 对象存放在一个数组里面，但这次不是。
    mainWindow = null
  })
})

// 当有窗口被关闭，退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
