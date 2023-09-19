import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";

type todoType = {
    id:string,
    title:string
}


const initialState:todoType[] = [
    {
        id:crypto.randomUUID(),
        title:"Hello1"
    },
    {
        id:crypto.randomUUID(),
        title:"Hello1"
    }

];

const todoSlice = createSlice({
    name:"todoApp",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
            const newTodo:any = {id:crypto.randomUUID(), title:action.payload}
            state.push(newTodo)
        },
        remove:(state,action:PayloadAction<string>)=>{
            return state.filter(item=>item.id !== action.payload)
        }
    }
})


export default todoSlice.reducer;
export const {add,remove} = todoSlice.actions;