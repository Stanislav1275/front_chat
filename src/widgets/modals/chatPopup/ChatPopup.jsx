import Dialog from "../../dialog/Dialog.jsx";
import {useDispatch, useSelector} from "react-redux";
import {isChatModelOpen} from "../selectors.js";
import {closeChat, openChat} from "../modalsSlice.js";
import React from "react";
import "./ChatPopup.scss"
import {Chat} from "../../../features/chat/Chat.jsx";

export const ChatPopup = () => {
    const dispatch = useDispatch();
    const isChatOpen = useSelector(isChatModelOpen);
    return (
        <Dialog
            header={<div className="bg-blue-600"></div>}
            className="chatPopup"
            isFooter={false}
            close={() => {
                dispatch(closeChat())
            }}
            open={() => {
                dispatch(openChat())
            }} isOpen={isChatOpen} primeReactIconClassName="pi-calendar">
            <Chat/>
        </Dialog>
    )
}

