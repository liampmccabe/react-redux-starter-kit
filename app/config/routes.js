import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from '../containers'
import { About, MoreInfo, Home } from '../components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="about" component={About} />
    <Route path="more" component={MoreInfo} />
  </Route>
)
