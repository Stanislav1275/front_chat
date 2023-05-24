import {Message} from  "../../entities/message/ui/Message.jsx"
import  "./MessageBlock.scss"
import {useDispatch, useSelector} from "react-redux";
import {ID, NONSERIALIZABLE_ID} from "../../shared/api/auth/selectors.js";
import {useEffect, useMemo} from "react";
import {fetchMessages} from "../../shared/api/apis.js";
import {getMessages, getMessagesLoadingStatus} from "../../entities/message/model/selectors.js";
import {ProgressSpinner} from "primereact/progressspinner";
export const MessageBlock = () => {
	const id = useSelector(ID);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMessages({id}))
	}, [])
	const messages = useSelector(getMessages)
	const status = useSelector(getMessagesLoadingStatus)
	const spinner = status === "loading"?<ProgressSpinner/>:null;
	const content = status === "access"?<View messages={messages} id = {id}/>:null;
	return (
		<div className="messagesList">
			{content}
			{spinner}
		</div>
	)
}
const View = ({messages, id}) => {
	const memo = useMemo(() => {
		return messages.map(({idFrom, body}, index) => {
			return <Message key ={index}  isYourSelf={idFrom === id} who={idFrom}>
				{body}
			</Message>
		})
	}, [messages, id])
	return (
		<div>
			{memo}
		</div>
	)
}