import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './style'

import Nav from './nav'
import Chat from './chat/home'
import Calendar from './calendar/home'

export default function HomePage() {
  return (
    <div className="box">
      <Nav />
      <div className="content">
        <Route component={Chat}
          exact
          path="/chat"
        />
        <Route component={Calendar}
          path="/calendar"
        />
      </div>
      <GlobalStyles />
      <style jsx>{`
        .box {
          height: 100%;
          display: flex;
        }
        .content {
        }
      `}</style>
    </div>
  )
}
