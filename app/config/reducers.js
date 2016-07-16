import { combineReducers } from 'redux'
import featureReducer from '../modules/feature/reducers'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  featureReducer,
  routing: routerReducer
})

export default reducers
