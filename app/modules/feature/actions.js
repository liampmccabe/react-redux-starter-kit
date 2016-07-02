export const ADD_THING = 'ADD_THING';

export function addThing(thing) {
  return {
    type: ADD_THING,
    thing,
    createdAt: Date.now()
  }
}
