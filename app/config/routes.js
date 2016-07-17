import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, About, MoreInfo, Home } from '../modules'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="about" component={About} />
    <Route path="more" component={MoreInfo} />
  </Route>
)
