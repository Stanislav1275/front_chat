import {createSlice} from '@reduxjs/toolkit';
import {fetchMessages} from "../../../shared/api/apis.js";

const initialState = {
    messages: [],
    messageLoadingStatus: "idle"
}


const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload)
        },
        changeInputMessage(state, action) {
            state.inputMessage = action.payload.body
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state, action) => {
                state.messageLoadingStatus = "loading";
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages = (action.payload);
                state.messageLoadingStatus = "access";
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.messageLoadingStatus = "error";
                state.messages = []
            })
    }
})
export const {addMessage, changeInputMessage} = MessagesSlice.actions
export default MessagesSlice.reducer