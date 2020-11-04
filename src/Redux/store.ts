import {combineReducers, createStore} from "redux";
import loadingReducer from "./loadingReducer";

let reducer = combineReducers({
    hw10: loadingReducer
})
let store=createStore(reducer);

export type AppStoreType = ReturnType<typeof reducer>
// @ts-ignore
window.store = store;
export default store;