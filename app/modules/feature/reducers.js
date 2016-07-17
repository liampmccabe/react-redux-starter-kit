import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  count: 1
}

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + action.amount});
    case DECREMENT:
      return Object.assign({}, state, {count: state.count - action.amount});
    default:
      return state;
  }
}

export default featureReducer
