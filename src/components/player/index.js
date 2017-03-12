import React, { Component } from 'react'

class Player extends Component {
  state = {
    file: new Audio(this.props.serverUrl + '/' + ('000'+ this.props.surah).slice(-3) + '.mp3'),
    playing: false
  }
  componentDidMount () {
    this.state.file.play()
    this.setState({
      playing: true
    })
  }
  onPause () {
    if (this.state.playing) {
      this.state.file.pause()
      this.setState({
        playing: false
      })
    } else {
      this.state.file.play()
      this.setState({
        playing: true
      })
    }
  }
  onFinish () {
    console.log('log');
  }
  render() {
    return (
      <div className="player">
        {/* <audio id='video1' controls>
          <source src={this.props.serverUrl + '/' + ('000'+ this.props.surah).slice(-3) + '.mp3'} type="audio/mpeg"/>
        </audio> */}
        <button
          onClick={this.onPause.bind(this)}
          >
          Pause
        </button>
      </div>
    )
  }
}

export default Player
