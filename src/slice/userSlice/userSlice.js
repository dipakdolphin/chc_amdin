import {createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
    token:null,
    data:null,
    is_logged_in:false
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        loginSucess:(state, action)=>{
            state.token = action.payload.token;
            state.data= jwtDecode(action.payload.token)
            state.is_logged_in = true;
        },
        logout:(state) =>initialState
    },
});

export const {loginSucess, logout} = userSlice.actions;
const usersReducer = userSlice.reducer;
export default usersReducer;