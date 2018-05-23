import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as R from 'ramda'
import { getReciters } from './actions'
import Reciters from './components'

class RecitersContainer extends React.Component {
  componentWillMount () {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(RecitersContainer)
