import {Cookies} from "react-cookie";
import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../apis.js";

const cookies = new Cookies();
const user =  cookies.get("user");
const initialState =
    user && typeof user !== "string"?
        {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser : (state) => {
            state.user = null;
            state.isLoggedIn = false
            cookies.set("user", null);
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user =  action.payload;
            cookies.set("user", state.user);

        },
        [loginUser.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },

    }
})


const {actions, reducer} = authSlice;
export const {logoutUser} = actions;

export default reducer