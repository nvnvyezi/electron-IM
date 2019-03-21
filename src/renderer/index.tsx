// remote用于在主进程和渲染进程之间建立联系
// clipboard可以提供复制文本的功能
// import { clipboard, remote } from 'electron'

// // 用remote获取当前窗口
// const currentWindow = remote.getCurrentWindow()

// console.log(currentWindow)
import React from 'react'
import ReactDom from 'react-dom'

function App() {
  return <div>sss</div>
}

ReactDom.render(<App />, document.getElementById('app'))
