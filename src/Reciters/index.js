import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as R from 'ramda'
import { getReciters } from './actions'
import Reciters from './components'

class RecitersContainer extends React.Component {
  componentWillMount () {
    // const src = 'http://server6.mp3quran.net/balilah/020.mp3'
    // const audio = new Audio(src)
    // audio.play()
    this.props.getReciters()
  }

  render () {
    const {reciters} = this.props
    return (
      <Reciters reciters={reciters} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getReciters }, dispatch)
}

const mapStateToProps = (state) => {
  return R.pick(['reciters'], state)
  // return { reciters: state.reciters }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecitersContainer)
