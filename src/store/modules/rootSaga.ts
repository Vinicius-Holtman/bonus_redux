import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export function* rootSaga() {
  return yield all([
    cart,
  ])
}