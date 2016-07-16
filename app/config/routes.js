import React from 'react'
import { Route } from 'react-router'
import { Feature, About }from '../modules'

export default (
  <Route path="/" component={Feature}>
    <Route path="about" component={About} />
  </Route>
)
