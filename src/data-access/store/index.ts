// @ts-nocheck
import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

let store

function initStore(_middleware) {
  return configureStore({
    reducer: rootReducer,
    middleware: _middleware,
  })

  // return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()))
}

export const initializeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

  let _store = store || initStore(middleware)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (store) {
    _store = initStore(middleware)
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  _store.sagaTask = sagaMiddleware.run(rootSaga)

  return _store
}

export const useStore = initialState => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export const wrapper = createWrapper(initializeStore, { debug: true })
