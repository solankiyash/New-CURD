import { createStore, applyMiddleware } from "redux";
import rootreducer from "./rootreducer";
import saga from "./saga";
import createSagaMiddelwere from "redux-saga";

const sagaMiddelwere = createSagaMiddelwere();

export const store = createStore(rootreducer, applyMiddleware(sagaMiddelwere));

sagaMiddelwere.run(saga);

export default store;
