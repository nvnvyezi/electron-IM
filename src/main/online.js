const { ipcMain } = require('electron')

function online() {
  ipcMain.on('online-status-changed', (event, status) => {
    console.log(status)
  })
}

module.exports = online
