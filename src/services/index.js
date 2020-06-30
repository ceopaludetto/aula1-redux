import { combineReducers } from "redux";

import { counter } from "./ducks/counter";
import { repos } from "./ducks/repos";

export const reducers = combineReducers({ counter, repos });
