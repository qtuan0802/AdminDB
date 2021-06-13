import { createStore, applyMiddleware, compose } from "redux";
import { RootReducer } from "../reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
