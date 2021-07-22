import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)) || applyMiddleware(sagaMiddleware);

const store = createStore(
    reducer,
    middleware
);

sagaMiddleware.run(rootSaga);

export default store;
