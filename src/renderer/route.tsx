import React from 'react'
import { Route } from 'react-router-dom'

import Chat from './chat/home'
import Calendar from './calendar/home'
import Contact from './contact/home'
import Collection from './collection/home'

export default function Router() {
  return (
    <>
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/collection" component={Collection} />
    </>
  )
}
