import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    count: 0,
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newItem = {
                id: uuidv4(),
                text: action.payload,
                completed: false
            }
            state.count += 1
            state.todos = [...state.todos, newItem]
        },
        deleteTodo: (state, action) => {
            const filterItems = state.todos.filter((item) => item.id !== action.payload)
            state.count -= 1
            state.todos = [...filterItems]
        },
        doneTodo: (state, action) => {
            const newItems = state.todos.map((item) => item.id === action.payload ? { ...item, completed: true } : item)
            state.todos = [...newItems]
        }
    },
})

export const { addTodo, deleteTodo, doneTodo } = todoSlice.actions

export default todoSlice.reducer