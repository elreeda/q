import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { play, pause, next, back } from '../../actions/index'
import './player.sass'

class Player extends Component {
  handlePreviousSurah () {
    this.props.back(this.props.surah.surah.id, this.props.reciter.id)
  }
  render() {
    return (
      <div className="player">
        <span onClick={this.handlePreviousSurah.bind(this)} className="previous controls"></span>
        <span
          className={ this.props.surah.isPlaying ? 'middle pause' : 'middle play' }
          onClick={() => this.props.surah.isPlaying ? this.props.pause() : this.props.play()}>

        </span>
        <span onClick={() => this.props.next(this.props.surah.surah.id, this.props.reciter.id)} className="next controls"></span>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ play, pause, next, back }, dispatch)
}

function mapStateToProps ({ surah, reciter }) {
  return { surah, reciter }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)