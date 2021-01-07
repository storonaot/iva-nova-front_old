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

export const getAlbums = createAction(`${FEATURE_KEY}/getMusicAlbumsStatus`)

const initialState = {
  loadingStatus: LOADING_STATUS.notLoaded,
  list: [],
}

const albumsSlice = createSlice({
  name: FEATURE_KEY,
  initialState,
  reducers: {
    getAlbumsStart: state => {
      state.loadingStatus = LOADING_STATUS.loading
    },
    getAlbumsDone: (state, action) => {
      state.loadingStatus = LOADING_STATUS.loaded
      state.list = action.payload
    },
    getAlbumsFailure: state => {
      state.loadingStatus = LOADING_STATUS.error
    },
  },
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

export const { getAlbumsFailure, getAlbumsDone } = albumsSlice.actions

export default albumsSlice
