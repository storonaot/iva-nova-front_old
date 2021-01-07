import { combineReducers } from '@reduxjs/toolkit'
import albumsSlice from './slices/albums'

const rootReducer = combineReducers({ [albumsSlice.name]: albumsSlice.reducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
