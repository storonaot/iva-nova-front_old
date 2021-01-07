import { all, fork } from 'redux-saga/effects'
import albums from './sagas/albums'

export function* helloSaga() {
  // eslint-disable-next-line no-console
  yield console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([helloSaga(), fork(albums)])
}
