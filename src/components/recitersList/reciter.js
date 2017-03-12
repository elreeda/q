import React, { Component } from 'react'
import { Link } from 'react-router'

class ReciersList extends Component {
  render() {
    const listReciters = this.props.reciters.map((reciter) => {
      return <Link to={'/listen/' + reciter.id} className="reciter name" key={reciter.id}>{reciter.name}</Link>
    })
    return (
      <div className="reciters-box">
        {listReciters}
      </div>
    )
  }
}

export default ReciersList
