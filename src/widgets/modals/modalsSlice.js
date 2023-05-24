import {
    createSlice,
} from "@reduxjs/toolkit";


const initialState = {
    isLoginModelOpen : false,
    isCallModelOpen : false,
    isChatModelOpen:false
}


export const pointsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        closeLogin : (state) => {
            state.isLoginModelOpen = false
        },
        openLogin : (state) => {
            state.isLoginModelOpen = true

        },
        closeCall : (state) => {
            state.isCallModelOpen = false
        },
        openCall : (state) => {

            state.isCallModelOpen = true
        },
        openChat : (state) => {

            state.isChatModelOpen = true
        },
        closeChat : (state) => {

            state.isChatModelOpen = false
        },


    }
})
const {actions, reducer} = pointsSlice;
// export const selectAll = pointsAdapter.getSelectors(({points}) => points)
export const {closeLogin, openLogin,closeCall, openCall, openChat, closeChat} = actions;

export default reducer