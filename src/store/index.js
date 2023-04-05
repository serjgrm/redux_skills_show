import { combineReducers } from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})
export const store = createStore(reducers,composeWithDevTools())


