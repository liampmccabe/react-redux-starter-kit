import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'

const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(createLogger()),
      DevTools.instrument()
    )
  )
}

export default configureStore
