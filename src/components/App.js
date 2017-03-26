import React, { Component } from 'react'
import Player from './player/index'
import './home.sass'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Player path={this.props.location.pathname}/>
      </div>
    )
  }
}

export default App
