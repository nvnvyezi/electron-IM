import React from 'react'
import { Route } from 'react-router-dom'


import GlobalStyles from './style'

import { sidebarList } from '../assets/lib/sidebarList'

import Nav from './nav'
import Header from './header'
import Chat from './chat/home'
import Calendar from './calendar/home'
import Contact from './contact/home'
import Collection from './collection/home'

export default function HomePage() {
  return (
    <div className="box">
      <div className="sidebar">
        <Header />
        <Nav data={sidebarList} />
      </div>
      <div className="content">
        <Route 
          component={Chat}
          exact
          path="/chat"
        />
        <Route 
          component={Calendar}
          exact
          path="/calendar"
        />
        <Route 
          component={Contact}
          exact
          path="/contact"
        />
        <Route 
          component={Collection}
          exact
          path="/collection"
        />
      </div>
      <GlobalStyles />
      <style jsx>{`
        .box {
          display: flex;
          height: 100%;
          overflow: hidden;
        }
        .sidebar {
          width: 60px;
          height: 100%;
          float: left;
          background: linear-gradient(to bottom, #55607d, #30374b);
          -webkit-app-region: drag;
        }
        .content {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
