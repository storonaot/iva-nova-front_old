import { call, takeLatest, put } from 'redux-saga/effects'
import Api from '../../api'

import { getAlbums, getAlbumsDone, getAlbumsFailure } from '../slices/albums'

// **fetch all
function* fetchAlbums() {
  const { response } = yield call(() => Api.fetchAlbums())

  if (response) {
    yield put(getAlbumsDone(response.data))
  } else {
    yield put(getAlbumsFailure())
  }
}
// fetch all**

export default function* albums() {
  yield takeLatest(getAlbums, fetchAlbums)
}
