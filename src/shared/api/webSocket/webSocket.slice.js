import { createSlice } from '@reduxjs/toolkit';
const initialState  = {
    isConnect: false
}
 const WebSocketSlice = createSlice({
    name: 'webSocket',
    initialState,
    reducers: {
        wsConnect ( state ) {
            state.isConnect = true
        },
        wsDisconnect ( state ) {
            state.isConnect = false;
        },
        send () {}

    }
 })
 export const { wsConnect, wsDisconnect, send} = WebSocketSlice.actions
 export default WebSocketSlice.reducer