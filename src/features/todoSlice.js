import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'to do list',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload ] }
        },
        clearTodo: (state) => {
            return { items: [] }
        },
        removeTodo: (state, action) => { 
            let array = [...state.items]
            let index = action.payload
            if (index !== -1){
                array.splice(index, 1)
                return { items: array}
            }
        }
    }
})

export const { addTodo, clearTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer