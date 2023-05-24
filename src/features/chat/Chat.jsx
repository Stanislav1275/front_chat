import {UserLinksList} from "../../widgets/userLinksList/UserLinksList.jsx";
import {MessageBlock} from "../../widgets/messageBlock/MessageBlock.jsx";
import "./Chat.scss"
import {useDispatch, useSelector} from "react-redux";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {addMessage} from "../../entities/message/model/messagesSlice.js";
import {Message} from "../../entities/message/model/Message.js";

export const Chat = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)
    const [typedBodyMessage, setTypedBodyMessage] = useState("");
    if (!user) return null;
    const splitter = user.id.split(" ")
    const role = splitter[0];
    const id = splitter[1];
    const adminAside = role !== "client" ? <AdminAside/> : null;
    return (
        <div className="chat flex-column">
            {adminAside}
            <div className="messagesBlock">
                <MessageBlock/>
            </div>
            <div className="typeMessage">
                <InputText
                    onChange={(e) => {
                        setTypedBodyMessage(e.target.value)
                    }}
                    onKeyDown={e => {
                    if (e.key === "Enter" || e.keyCode === 13) {
                        if(typedBodyMessage.trim() !== "") {
                            dispatch(addMessage(new Message(id, typedBodyMessage)))
                            setTypedBodyMessage("")
                        }
                    }


                }
                }/>
            </div>
        </div>
    )
}
const AdminAside = () => {
    return (
        <aside className="ls">
            <UserLinksList/>
        </aside>
    )
}