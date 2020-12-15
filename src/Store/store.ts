import {combineReducers, createStore} from "redux";
import {inputReducer} from "./inputReducer";

//Create store
const reducers = combineReducers({
    todoInput: inputReducer,
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers())

//Create type for store
type reducersType = typeof reducers
export type appStoreType =ReturnType<reducersType>