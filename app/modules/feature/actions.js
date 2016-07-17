export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increase (amount) {
  return {
    type: INCREMENT,
    amount
  }
}

export function decrease (amount) {
  return {
    type: DECREMENT,
    amount
  }
}
