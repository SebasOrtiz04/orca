import {configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import reducer from './reducers'

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: thunk
    }),
    devTools: true,
})
export default store