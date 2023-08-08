import { counterReducer } from "./reducer";
import { createStore } from 'redux'
export const mystore = createStore(counterReducer);