import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getReciter } from './actions'
import {
  startTrack,
  startPlaylist,
  pauseTrack,
  resumeTrack,
  addToQueue
} from '../Player/actions'

import ReciterDetails from './components'

class ReciterDetailsContainer extends React.Component {
  constructor () {
    super()
    this.startPlaylist = this.startPlaylist.bind(this)
  }

  componentDidMount () {
    this.props.getReciter(this.props.match.params.id)
  }
  
  startPlaylist () {
    this.props.startPlaylist(this.props.reciter)
    this.props.startTrack(this.props.reciter.suras[0])
  }
  
  render () {
    const {reciter, startTrack, playback: { player, queue: {currentTrack}}} = this.props
    return <ReciterDetails
      resumeTrack={this.props.resumeTrack}
      player={player}
      onPauseStrack={this.props.pauseTrack}
      currentTrack={currentTrack}
      handleStartPlaylist={this.startPlaylist}
      onStartTrack={startTrack}
      handleAddToQueue={this.props.addToQueue}
      reciter={reciter} />
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getReciter,
    startTrack,
    startPlaylist,
    pauseTrack,
    resumeTrack,
    addToQueue
  }, dispatch)
}
const mapStateToProps = (state) => {
  return R.pick(['reciter', 'playback'], state)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReciterDetailsContainer)
