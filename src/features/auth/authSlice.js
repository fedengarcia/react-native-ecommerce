import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    profileImage: null
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
        },
        setProfileImage: (state, action) => {
            return{
                ...state,
                profileImage: action.payload
            }
        }
    }
})


export const { setUser, logOut, setProfileImage} = authSlice.actions;

export default authSlice.reducer;