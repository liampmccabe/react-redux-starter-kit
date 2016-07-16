import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

class Feature extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <h1>Helloooooo</h1>
        <Link to="/about">About</Link>
        {children}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Feature)
