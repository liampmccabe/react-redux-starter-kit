import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configureStore from './store/configureStore';
import routes from './config/routes'

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

render(app, document.getElementById('app'))
