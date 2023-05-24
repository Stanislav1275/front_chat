import {createSlice} from '@reduxjs/toolkit';
// import {fetchMessages} from "../../../shared/api/apis.js";

const initialState = {
    chatRooms: [],
    messageLoadingStatus: "idle",

}


const ChatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {

    },

})
export const {} = ChatSlice.actions
export default ChatSlice.reducer