import { applyMiddleware, combineReducers } from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const reducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))


