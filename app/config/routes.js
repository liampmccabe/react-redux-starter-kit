import React from 'react'
import { Route } from 'react-router'
import Feature from '../modules/feature/component'
import About from '../modules/about/component'

export default (
  <Route path="/" component={Feature}>
    <Route path="about" component={About} />
  </Route>
)
