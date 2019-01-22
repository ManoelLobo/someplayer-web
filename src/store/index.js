import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

// TODO: check Reactotron integration
// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMonitor = null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAdequateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAdequateStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
