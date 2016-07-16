import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createLogger from 'redux-logger'

const logger = createLogger()

const configureStore = (initialState) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
}

export default configureStore
