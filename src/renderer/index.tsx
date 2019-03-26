// remote用于在主进程和渲染进程之间建立联系
// clipboard可以提供复制文本的功能
// import { clipboard, remote } from 'electron'

// // 用remote获取当前窗口
// const currentWindow = remote.getCurrentWindow()

// console.log(currentWindow)
import React from 'react'
import ReactDom from 'react-dom'
import { ipcRenderer } from 'electron'

import GlobalStyles from './style'

import Nav from './nav'

function App() {
  return (
    <div className="box">
      <Nav />
      <GlobalStyles />
      <style jsx>{`
        .box {
          height: 100%;
          display: flex;
        }
      `}</style>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

const updateOnlineStatus = function() {
  ipcRenderer.send(
    'online-status-changed',
    window.navigator.onLine ? 'online' : 'offline'
  )
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)
