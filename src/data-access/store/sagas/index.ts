import { all } from 'redux-saga/effects'
import { watchFetchAlbums } from './albums'

export function* helloSaga() {
  // eslint-disable-next-line no-console
  yield console.log('Hello Sagas!')
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchFetchAlbums()])
}
