import React from 'react'
import { ipcRenderer } from 'electron'

import Flex from 'Common/flex'

export default function Header() {

  /* 渲染路由 */
  return (
    <div className="header">
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
        .header {    
          width: 60px;
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
