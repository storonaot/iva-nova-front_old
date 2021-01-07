import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export const initializeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(initializeStore, { debug: true })
