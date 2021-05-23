import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { Authreducer, Slidereducer,saga } from './modules'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers({
    authState: Authreducer, 
    sliderState: Slidereducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

export const persistor = persistStore(store);