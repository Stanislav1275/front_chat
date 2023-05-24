import {combineReducers} from "@reduxjs/toolkit";
import modals from "../widgets/modals/modalsSlice.js"
import auth from "../shared/api/auth/authSlice.js"
import messages from "../entities/message/model/messagesSlice.js"
import chat from "../entities/chat/chatsSlice.js"

export const rootReducer = combineReducers({
    modals, auth, messages
})