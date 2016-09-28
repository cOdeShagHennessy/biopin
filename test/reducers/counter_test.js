import test from 'ava'
import {reducerTest} from 'redux-ava'

import counter from '../../app/reducers/counter'
import {countUp, countDown} from '../../app/actions/counterActions'

test('counter reducer handles countUp', reducerTest(
  counter,
  0,
  countUp(),
  1,
  'Increment counter'
))
test('counter reducer handles countDown', reducerTest(
  counter,
  200,
  countDown(),
  199,
  'Decrement counter'
))
