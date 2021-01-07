import { combineReducers } from '@reduxjs/toolkit'
import albums from './slices/albums'

const rootReducer = combineReducers({ albums })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
