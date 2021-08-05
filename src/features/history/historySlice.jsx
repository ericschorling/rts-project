import {createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        search: [],
        history: [],
    },
    reducers: {
        setSearch: (state, action) =>{
            state.search = action.payload
        },
        addHistory: (state, action) => {
            state.history = [...state.history, action.payload]
        }
    }
})

export const {addHistory, setSearch} = historySlice.actions
export default historySlice.reducer