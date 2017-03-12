import React, { Component } from 'react'

class ReciterCategory extends Component {
  render() {
    return (
      <h3 className="alphabet">{this.props.category}</h3>
    )
  }
}

export default ReciterCategory
