/*
 * action types
 */

export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'

/*
 * action creators
 */

export function countUp() {
  return { type: INCREMENT_COUNT}
}
export function countDown() {
  return { type: DECREMENT_COUNT}
}
