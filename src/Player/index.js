import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  pauseTrack,
  resumeTrack,
  nextTrack,
  previousTrack,
  updatePlayerProgress
} from '../Player/actions'

import Player from './components'

class PlayerContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTime: 0,
      duration: 0
    }
    this.handleProgressTransition = this.handleProgressTransition.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.playback.player) {
      return
    }
    nextProps.playback.player.ontimeupdate = () => {
      const currentTime = nextProps.playback.player.currentTime
      const duration = nextProps.playback.player.duration
      this.setState({ currentTime, duration })
      if (
        document.title !==
        `${nextProps.playback.queue.currentTrack.name} · ${
          nextProps.playback.queue.currentTrack.reciterName
        }`
      ) {
        document.title = `${nextProps.playback.queue.currentTrack.name} · ${
          nextProps.playback.queue.currentTrack.reciterName
        }`
      }
    }
    nextProps.playback.player.onended = () => {
      this.props.nextTrack()
    }
  }

  handleProgressTransition (e, uiPlayer) {
    if (!this.props.playback.player) {
      return
    }
    const time = this.props.playback.player.duration
    const playerWidth = uiPlayer.clientWidth
    const clickedPositionX = e.clientX - e.target.getBoundingClientRect().left
    const second = (clickedPositionX * time) / playerWidth
    this.props.updatePlayerProgress(second)
  }

  render () {
    return (
      <Player
        {...this.state}
        nextTrack={this.props.nextTrack}
        previousTrack={this.props.previousTrack}
        pauseTrack={this.props.pauseTrack}
        resumeTrack={this.props.resumeTrack}
        playback={this.props.playback}
        handleProgressTransition={this.handleProgressTransition}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { pauseTrack, resumeTrack, nextTrack, previousTrack, updatePlayerProgress },
    dispatch
  )
}

const mapStateToProps = state => {
  return R.pick(['playback'], state)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
