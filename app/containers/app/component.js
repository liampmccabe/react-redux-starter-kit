import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const App = ({ children }) => (
  <div>
    <h1>React Redux Router Starter Kit</h1>

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/more">More Info</Link>

    <div>{children}</div>
  </div>
)

export default App
