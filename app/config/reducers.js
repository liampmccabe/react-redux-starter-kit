import { combineReducers } from 'redux'
import counterReducer from '../modules/counter/reducers'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  counterReducer,
  routing: routerReducer
})

export default reducers
