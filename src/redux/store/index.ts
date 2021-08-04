import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ReactotronConfig from "../../../ReactoTron";
import { reducer as reducerPokemon } from "../reducers/reducer.pokemon";
import rootSaga from "./../sagas/sagas.pokemon";

const sagaMonitor = ReactotronConfig.createSagaMonitor?.();
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const composer = compose(
  applyMiddleware(sagaMiddleware),
  ReactotronConfig.createEnhancer()
);

const store = createStore(
  combineReducers({
    reducerPokemon,
  }),
  composer
);

sagaMiddleware.run(rootSaga);

export default store;
