import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Feature extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <h1>React Redux Router Starter Kit</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/more">More Info</Link>

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
