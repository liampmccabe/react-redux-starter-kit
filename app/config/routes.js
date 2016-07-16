import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Feature, About, MoreInfo, Home } from '../modules'

export default (
  <Route path="/" component={Feature}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="more" component={MoreInfo} />
  </Route>
)
