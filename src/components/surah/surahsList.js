import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSurah } from '../../actions/index'

class SurahsList extends Component {
  render() {
    const surahs = this.props.surahs.map(surah => {
      return <li
        className={this.props.active === surah.id ? 'surah active': 'surah'}
        onClick={() => this.props.getSurah(surah.id)}
        key={surah.id}>
          <span className="id">{('000'+ surah.id).slice(-3)}</span>
          <span className="name">{surah.name}</span>
        </li>
    })
    return (
      <ul className="column surahs">
        {surahs}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getSurah }, dispatch)
}

export default connect(null, mapDispatchToProps)(SurahsList)
