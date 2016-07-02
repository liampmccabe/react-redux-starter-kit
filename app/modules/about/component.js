import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

export default About
