import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../feature/actions'

const Home = ({ increase, decrease, count }) => (
  <div>
    <h2>Hey!</h2>
    <p>Welcome home!</p>

    <p>Count: {count}</p>
    <button onClick={() => increase(1)}>Increase</button>
    <button onClick={() => decrease(1)}>Decrease</button>
  </div>
)

export default connect(
  state => ({
    count: state.featureReducer.count
  }), {
    increase,
    decrease
  }
)(Home)
