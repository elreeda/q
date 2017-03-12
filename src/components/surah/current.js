import React, { Component } from 'react'
import './current.sass'

class Current extends Component {
  render() {
    return (
      <div className="current-surah">
        <h4 className="surah-number">_ {this.props.surah.id}</h4>
        <h3 className="surah-name">{this.props.surah.name}.</h3>
        <span className="view-reciter">{this.props.reciter.name}</span>
      </div>
    )
  }
}

export default Current
