import {
    configureStore,
    createSlice
}  from '@reduxjs/toolkit'

let userSlice = createSlice({
    name : 'user',
    initialState : {
        user : null,
        status : ''
    },
    reducers : {
        singIn : (state,action) => {
            state.user = action.payload;
        },
        logOut : (state) => {
            state.user = null;
        }
    }
})

export  const { singIn, logOut } = userSlice.actions;

export const store = configureStore({
    reducer : {
        user : userSlice.reducer
    }
})