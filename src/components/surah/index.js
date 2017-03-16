import React, { Component } from 'react'
import SurahsList from './surahsList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSurahs, getSurah, getReciter } from '../../actions/index'
import Current from './current'
import './surah.sass'

class Surah extends Component {
  componentDidMount () {
    this.props.fetchSurahs(this.props.params.id)
    this.props.getSurah(null, this.props.params.id)
    this.props.getReciter(this.props.params.id)
  }
  render() {
    if (!this.props.surahs) {
      return <span>wait</span>
    }
    return (
      <div className="view-surah container">
        <div className="col-1">
          <Current
            surah={this.props.surah.surah}
            reciter={this.props.reciter}
          />
        </div>
        <div className="col-2">
          <SurahsList surahs={this.props.surahs} active={this.props.surah.surah.id} reciter={this.props.reciter.id} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchSurahs, getSurah, getReciter }, dispatch)
}

function mapStateToProps ({ surahs, reciter, surah }) {
  return { surahs, reciter, surah }
}

export default connect(mapStateToProps, mapDispatchToProps)(Surah)
