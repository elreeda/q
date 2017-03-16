import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSurah } from '../../actions/index'

class SurahsList extends Component {
  render() {
    const surahs = this.props.surahs.map(surah => {
      return <li
        className={this.props.active === surah.id ? 'surah active': 'surah'}
        onClick={() => this.props.getSurah(surah.id, this.props.reciter)}
        key={surah.id}>
          <span className="id">{('000'+ surah.id).slice(-3)}</span>
          <span className="name">{surah.name}</span>
        </li>
    })
    return (
      <div className="content">
        <ul className="column surahs">
          {surahs}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getSurah }, dispatch)
}

function mapStateToProps({ surah }) {
  return { surah }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurahsList)
