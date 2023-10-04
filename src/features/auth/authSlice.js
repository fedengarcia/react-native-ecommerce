import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
}


export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action) => {
            return {
                user: action.payload.data.email,
                token: action.payload.data.idToken
            }
        },
        logOut: () => {
            return {user: null, token: null}
        }
    }
})


export const { setUser, logOut} = authSlice.actions;

export default authSlice.reducer;