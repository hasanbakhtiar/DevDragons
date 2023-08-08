import { createStore } from 'redux';

const initialState = {count:0}


const myReducer = (state=initialState,action)=>{
        switch (action.type) {
          case 'decrement':
              return {count:state.count -1};
          case 'increment':
            return {count:state.count + (typeof action.payload == "string" ? 1 :action.payload) };
          default:
            return state;
        }
}


const store = createStore(myReducer);

store.subscribe(()=>{
  console.log(store.getState());
})


store.dispatch({
  type:"decrement"
})

store.dispatch({
  type:"increment",
  payload:10
})


store.dispatch({
  type:"increment",
  payload:"10"
 
})


store.dispatch({
  type:"increment",
  payload:10
  
})
