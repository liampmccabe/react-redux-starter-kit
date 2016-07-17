import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './config/configureStore';
import routes from './config/routes'
import DevTools from './containers/DevTools'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

const app = (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
)

render(app, document.getElementById('app'))
