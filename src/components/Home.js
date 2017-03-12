import React, { Component } from 'react'
import Search from './search/index'
import ReciersList from './recitersList/index'
import './home.sass'

class Home extends Component {
  render() {
    return (
      <div className="container home">
        <Search />
        <ReciersList />
      </div>
    )
  }
}

export default Home
