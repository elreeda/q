import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchReciters } from '../../actions/index'
import './search.sass'

class Search extends Component {
  state = {
    query: ''
  }
  handleChange (e) {
    this.setState({
      query: e.target.value
    }, () => {
      this.props.searchReciters(this.state.query)
    })
  }
  render () {
    return (
      <div className="search-container">
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.query}
          type="text"
          className="input-search"
          placeholder="Search your favorite reciter"/>
          <span className="search-icon"></span>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ searchReciters }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
