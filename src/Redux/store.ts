import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loadingReducer";
import colorReduser from "./colorReduser";
import requestReduser from "./requestReduser";
import thunk from 'redux-thunk';

let reducer = combineReducers({
    hw10: loadingReducer,
    hw12:colorReduser,
    hw13:requestReduser,
})
let store=createStore(reducer ,applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducer>
// @ts-ignore
window.store = store;
export default store;