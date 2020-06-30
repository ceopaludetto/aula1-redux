import { createStore, applyMiddleware } from "redux";
import createSaga from "redux-saga";

import { reducers } from "../services";
import { root } from "../services/saga";

const saga = createSaga();

export const store = createStore(reducers, applyMiddleware(saga));

saga.run(root);
