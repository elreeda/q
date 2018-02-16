import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Reciters from './Reciters'
import ReciterDetails from './Reciter'
import Player from './Player'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Reciters} />
        <Route path='/listen/:id' component={ReciterDetails} />
        <Player />
      </div>
    </BrowserRouter>
  )
}

export default Router
