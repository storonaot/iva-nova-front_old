import {
  createSlice,
  createAction,
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit'
import { LOADING_STATUS, AlbumEntity } from '../../types'

export const FEATURE_KEY = 'albums'
export const albumsAdapter = createEntityAdapter()

interface AlbumsState extends EntityState<AlbumEntity> {
  loadingStatus: LOADING_STATUS
  list: AlbumEntity[]
}

export const getAlbumList = createAction(`${FEATURE_KEY}/getAlbumListStatus`)

const initialState = {
  loadingStatus: LOADING_STATUS.notLoaded,
  list: [],
}

const albumsSlice = createSlice({
  name: FEATURE_KEY,
  initialState,
  reducers: {},
})

const selectAlbumsSlice = (state: { [FEATURE_KEY]: AlbumsState & EntityState<AlbumEntity> }) =>
  state[FEATURE_KEY]
const selectors = albumsAdapter.getSelectors(selectAlbumsSlice)

export const albumsSelectors = {
  ...selectors,
  isLoading: createSelector(
    selectAlbumsSlice,
    slice => slice.loadingStatus === LOADING_STATUS.loading,
  ),
  list: createSelector(selectAlbumsSlice, slice => slice.list),
}

export default albumsSlice
