import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Reciters from './Reciters'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Reciters} />
        <Route path='/listen/:id' component={() => 'surahs'} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
