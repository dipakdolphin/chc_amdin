import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "../slice/userSlice/userSlice";

export default configureStore({
    reducer:{
        users : usersReducer
    },
})