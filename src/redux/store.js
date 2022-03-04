import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './root-saga';

const sagaMiddleWare = createSagaMiddleware();

const middleWare = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
