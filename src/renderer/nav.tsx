import React from 'react'
import { Link } from 'react-router-dom'
import { ipcRenderer } from 'electron'

import Flex from 'Common/flex'

const list = [
  {
    text: '聊天',
    href: '/chat',
  },
  {
    text: '日历',
    href: '/calendar',
  },
]

export default function Nav() {

  /* 重新定义缩小，放大，关闭按钮 */
  function renderHeader() {
    return (
      <div className="box">
        <Flex align="center"
          className="tabs"
          justify="around">
          <span
            className="red circle"
            onClick={() => {
              ipcRenderer.send('close')
            }}
          />
          <span
            className="orange circle"
            onClick={() => {
              ipcRenderer.send('min')
            }}
          />
          <span
            className="green circle"
            onClick={() => {
              ipcRenderer.send('max')
            }}
          />
        </Flex>
        <style jsx>{`
          .box {
            padding: 16px 4px;
          }
          .circle {
            position: relative;
            display: inline-block;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            cursor: pointer;
          }
          .circle::before {
            content: '';
            position: absolute;
            display: none;
            width: 11px;
            height: 11px;
          }
          .circle:hover::before {
            display: inline-block;
          }
          .red {
            background-color: rgb(255, 98, 88);
          }
          .orange {
            background-color: #f6c150;
          }
          .green {
            background-color: #63c756;
          }
          .red::before {
            background: url(${require('Images/close.svg')}) no-repeat center/
              9px 9px;
          }
          .orange::before {
            background: url(${require('Images/min.svg')}) no-repeat center/ 9px
              9px;
          }
          .green::before {
            background: url(${require('Images/max.svg')}) no-repeat center/ 9px
              9px;
          }
        `}</style>
      </div>
    )
  }

  /* 渲染路由 */
  function renderNav() {
    return (
      <ul className="nav">
        {list.map((item: { text: string; href: string }) => (
          <Link key={item.text}
            to={item.href}>
            <li>{item.text}</li>
          </Link>
        ))}
        <style jsx>{`
          .nav {
            color: #fff;
          }
        `}</style>
      </ul>
    )
  }

  return (
    <div className="nav">
      {renderHeader()}
      {renderNav()}
      <style jsx>{`
        .nav {
          width: 60px;
          height: 100%;
          background: linear-gradient(to bottom, #55607d, #30374b);
          -webkit-app-region: drag;
        }
      `}</style>
    </div>
  )
}
