import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const feature = ({ children }) => (
  <div>
    <h1>React Redux Router Starter Kit</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/more">More Info</Link>

    <div>
      {children || 'Welcome home'}
    </div>
  </div>
)

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(feature)
