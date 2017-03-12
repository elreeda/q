import React, { Component } from 'react'
import Reciter from './reciter'
import ReciterCategory from './reciterCategory'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchReciters } from '../../actions/index'
import _ from 'lodash'
import './reciters.sass'

class ReciersList extends Component {
  componentDidMount () {
    this.props.fetchReciters()
  }
  render() {
    if (this.props.reciters.length === 0) {
      return <span>Wait</span>
    }
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const rows = []
    _.forEach(alphabet, (value, key) => {
      const recitersPerLetter = _.filter(this.props.reciters, { letter: value })
      if (recitersPerLetter.length > 0) {
        rows.push(<ReciterCategory category={value} key={key}/>)
        rows.push(<Reciter reciters={recitersPerLetter} key={'reciter-' + key} />)
      }
    })
    return (
      <div className="container container-reciters">
        {rows}
      </div>
    )
  }
}

function mapStateToProps ({ reciters }) {
  return { reciters }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchReciters }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReciersList)
