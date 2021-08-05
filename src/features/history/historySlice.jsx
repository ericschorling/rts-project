
//Redux slice that controls the search state including search data and the search history
//Creates multiple actions to update state

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