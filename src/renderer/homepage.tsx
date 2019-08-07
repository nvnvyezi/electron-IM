import React from 'react'
import Router from './route'

import GlobalStyles from './style'

import { sidebarList } from '../assets/lib/sidebarList'

import Nav from './nav'
import Header from './header'

export default function HomePage() {
  return (
    <div className="box">
      <div className="sidebar">
        <Header />
        <Nav data={sidebarList} />
        <div>
          <Router />
        </div>
      </div>
      <GlobalStyles />
      <style jsx>{`
        .box {
          height: 100%;
          display: flex;
        }
        .sidebar {
          width: 60px;
          height: 100%;
          float: left;
          background: linear-gradient(to bottom, #55607d, #30374b);
          -webkit-app-region: drag;
        }
        .content {
        }
      `}</style>
    </div>
  )
}
