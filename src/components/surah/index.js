import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import SurahsList from './surahsList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSurahs, getSurah, getReciter } from '../../actions/index'
import { Link } from 'react-router'
import Current from './current'
import './surah.sass'

class Surah extends Component {
  componentDidMount () {
    this.props.fetchSurahs(this.props.params.id)
    // this.props.getSurah(null, this.props.params.id)
    this.props.getReciter(this.props.params.id)
  }
  backButton () {
    return (
      <svg width="27px" height="27px" viewBox="0 0 27 27" version="1.1">
        <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.803187274">
          <g id="View-Sura-" transform="translate(-103.000000, -70.000000)" fill="#FFFFFF">
            <g id="go-back-left-arrow" transform="translate(103.000000, 70.000000)">
              <g id="Capa_1">
                <g id="arrow-back">
                  <polygon id="Shape" points="27 11.8125 6.4125 11.8125 15.8625 2.3625 13.5 0 0 13.5 13.5 27 15.8625 24.6375 6.4125 15.1875 27 15.1875"></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
  render() {
    if (!this.props.surahs) {
      return <span>wait</span>
    }
    const currentSurahComponent = this.props.surah.surah ? (
      <div className="col-1">
        <Current
            surah={this.props.surah.surah}
            reciter={this.props.reciter}
          />
      </div>
    )
    : null
    return (
      <Overdrive id="hoe" duration={1000} animationDelay={5}>
        <div className="view-surah container">
          <div className="back">
            <Link to='/'>{this.backButton()}</Link>
          </div>
          <div className="content-list" style={{marginLeft: !this.props.surah.surah ? '-10%': 'auto'}}>
            {currentSurahComponent}
            <div className="col-2">
              <SurahsList surahs={this.props.surahs} active={this.props.surah.surah ? this.props.surah.surah.id : null} reciter={this.props.reciter.id} />
            </div>
          </div>
        </div>
      </Overdrive>
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
