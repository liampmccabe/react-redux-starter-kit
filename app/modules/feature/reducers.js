import {
  ADD_THING,
} from './actions'

const featureReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_THING:
      return Object.assign({}, state, action.thing);
    default:
      return state;
  }
}

export default featureReducer
