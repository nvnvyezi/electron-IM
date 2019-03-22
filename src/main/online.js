import { ipcMain } from 'electron'

function online() {
  ipcMain.on('online-status-changed', (event, status) => {
    console.log(status)
  })
}

export default online
