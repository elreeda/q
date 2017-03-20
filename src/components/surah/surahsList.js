import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSurah, next } from '../../actions/index'

class SurahsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0
    }
  }
  componentWillReceiveProps (nextProps) {
    nextProps.surah.file.ontimeupdate = (e) => {
      this.setState({
        progress: (nextProps.surah.file.currentTime / nextProps.surah.file.duration) * 100
      })
    }
    nextProps.surah.file.onended = () => {
      this.nextTrack()
    }
  }
  nextTrack () {
    this.props.next(this.props.surah.surah.id, this.props.surah.reciter.id)
  }
  render() {
    const surahs = this.props.surahs.map(surah => {
      return <li
        className={this.props.active === surah.id ? 'surah active': 'surah'}
        onClick={() => this.props.getSurah(surah.id, this.props.reciter)}
        key={surah.id}>
          <span className="id">{('000'+ surah.id).slice(-3)}</span>
          <span className="name">{surah.name}</span>
          <span className="line-progress" style={{ width: isNaN(this.state.progress) ? '' : `${this.state.progress}%`  }}></span>
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
  return bindActionCreators({ getSurah, next }, dispatch)
}

function mapStateToProps({ surah }) {
  return { surah }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurahsList)
