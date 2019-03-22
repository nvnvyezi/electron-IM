import { app, BrowserWindow, Menu } from 'electron'

import online from './online'

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC,window 会被自动地关闭
let mainWindow = null

// 当有窗口被关闭，退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候这个方法就被调用
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
  })

  mainWindow.loadURL('http://localhost:7242')

  mainWindow.openDevTools()

  mainWindow.on('closed', () => {

    // 取消引用 window 对象，如果你的应用支持多窗口的话，通常会把多个 window 对象存放在一个数组里面，但这次不是。
    mainWindow = null
  })
})

// 设置菜单
app.dock.setMenu(
  Menu.buildFromTemplate([
    {
      label: '点击他',
      click: () => {
        console.log('啊啊啊')
      },
    },
  ])
)

online()
