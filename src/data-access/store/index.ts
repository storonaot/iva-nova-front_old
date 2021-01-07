/* eslint-disable global-require */
// @ts-nocheck

import createSagaMiddleware, { END } from 'redux-saga'

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

// const makeStore = () => {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: [sagaMiddleware],
//   })

//   store.runSaga = () => {
//     // Avoid running twice
//     if (store.saga) return
//     store.saga = sagaMiddleware.run(rootSaga)
//   }

//   store.stopSaga = async () => {
//     // Avoid running twice
//     if (!store.saga) return
//     store.dispatch(END)
//     await store.saga.done
//     store.saga = null
//   }

//   store.execSagaTasks = async (isServer, tasks) => {
//     // run saga
//     store.runSaga()
//     // dispatch saga tasks
//     tasks(store.dispatch)
//     // Stop running and wait for the tasks to be done
//     await store.stopSaga()
//     // Re-run on client side
//     if (!isServer) {
//       store.runSaga()
//     }
//   }

//   // Initial run
//   store.runSaga()

//   console.log('store', store)

//   return store
// }

export type AppDispatch = typeof store.dispatch

export default store
