import { createStore } from "redux"
import { movieReducer } from "../reducers/movieReducer";

const configureStore = ()=>{
    const store = createStore(movieReducer);
    return store;
}

export default configureStore;