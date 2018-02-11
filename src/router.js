import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Reciters from './Reciters'
import ReciterDetails from './Reciter'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Reciters} />
        <Route path='/listen/:id' component={ReciterDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
