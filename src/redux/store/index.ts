import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';

import {reducer as reducerPokemon} from '../reducers/reducer.pokemon'
import rootSaga from './../sagas/sagas.pokemon'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducerPokemon,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;