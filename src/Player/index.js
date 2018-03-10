import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  pauseTrack,
  resumeTrack,
  nextTrack,
  previousTrack
} from '../Player/actions'

import Player from './components'

class PlayerContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTime: 0,
      duration: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.playback.player) {
      return
    }
    nextProps.playback.player.ontimeupdate = () => {
      const currentTime = nextProps.playback.player.currentTime
      const duration = nextProps.playback.player.duration
      this.setState({ currentTime, duration })
    }
    nextProps.playback.player.onended = () => {
      this.props.nextTrack()
    }
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
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { pauseTrack, resumeTrack, nextTrack, previousTrack },
    dispatch
  )
}

const mapStateToProps = state => {
  return R.pick(['playback'], state)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
