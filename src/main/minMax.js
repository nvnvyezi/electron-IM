const { ipcMain } = require('electron')

function onMinMax(main) {
  ipcMain.on('min', () => main.minimize())
  ipcMain.on('max', () => {
    if (main.isMaximized) {
      main.unMaximize()
    } else {
      main.maximize()
    }
  })
  ipcMain.on('close', () => main.close())
}

module.exports = onMinMax
