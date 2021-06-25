import { useRouter } from "next/router"
import { useState, ChangeEvent, MouseEvent, useRef, useLayoutEffect } from "react"
import TimeAgo from "timeago-react"

import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, database } from "../services/firebase"
import { useCollection } from "react-firebase-hooks/firestore"

import { getReceiverEmail } from "../utils/getUserData"
import { User } from "../types/chat"

import Message from "./Message"

import {
	Container,
	Header,
	HeaderInfo,
	HeaderIcons,
	MessageContainer,
	EndOfMessages,
	InputContainer,
	Input
} from "../styles/components/ChatScreen"

import { Avatar, IconButton } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/moreVert"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"

export default function ChatScreen({ chat, messages }): JSX.Element {
	const [user] = useAuthState(auth)
	const endOFMessageRef = useRef(null)

	const receiverEmail = getReceiverEmail(chat.users, user as User)
	const [receiverSnapshot] = useCollection(
		database.collection("users").where("email", "==", receiverEmail)
	)
	const receiverData = receiverSnapshot?.docs?.[0]?.data() as User

	const [input, setInput] = useState("")
	const router = useRouter()
	const [messagesSnapshot] = useCollection(
		database
			.collection("chats")
			.doc(router.query.id as string)
			.collection("messages")
			.orderBy("timestamp", "asc")
	)

	useLayoutEffect(() => {
		scrollToBottom()
	}, [])

	function handleShowMessages() {
		if (messagesSnapshot) {
			return messagesSnapshot.docs.map(message => (
				<Message
					key={message.id}
					user={message.data().user}
					message={{
						...message.data(),
						timestamp: message.data().timestamp?.toDate().getTime()
					}}
				/>
			))
		} else {
			return JSON.parse(messages).map(message => (
				<Message key={message.id} user={message.user} message={message} />
			))
		}
	}

	function handleInputText(event: ChangeEvent<HTMLInputElement>): void {
		setInput(event.target.value)
	}

	function handleSendButton(
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	): void {
		event.preventDefault()

		// Update Last Seen
		database.collection("users").doc(user?.uid).set(
			{
				lastSeen: firebase.firestore.FieldValue.serverTimestamp()
			},
			{ merge: true }
		)

		// Store Message
		database
			.collection("chats")
			.doc(router.query.id as string)
			.collection("messages")
			.add({
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				message: input,
				user: user?.email,
				photoURL: user?.photoURL
			})

		setInput("")
		scrollToBottom()
	}

	function scrollToBottom() {
		endOFMessageRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}

	return (
		<Container>
			<Header>
				{receiverData ? (
					<Avatar src={receiverData?.photoURL} />
				) : (
					<Avatar>{receiverEmail[0].toUpperCase()}</Avatar>
				)}

				<HeaderInfo>
					<h3>{receiverData?.name || receiverEmail}</h3>

					{receiverSnapshot ? (
						<p>
							Last seen:&nbsp;
							{receiverData?.lastSeen?.toDate() ? (
								<TimeAgo
									datetime={receiverData?.lastSeen?.toDate()}
									locale="pt_BR"
								/>
							) : (
								"Never"
							)}
						</p>
					) : (
						<p>Loading Last Active</p>
					)}
				</HeaderInfo>

				<HeaderIcons>
					<IconButton>
						<SearchIcon className="header-icon" />
					</IconButton>
					<IconButton>
						<MoreVertIcon className="header-icon" />
					</IconButton>
				</HeaderIcons>
			</Header>

			<MessageContainer>
				{handleShowMessages()}
				<EndOfMessages ref={endOFMessageRef} />
			</MessageContainer>

			<InputContainer>
				<InsertEmoticonIcon className="footer-icon" />
				<AttachFileIcon className="footer-icon" />

				<Input
					placeholder="Type a message"
					value={input}
					onChange={handleInputText}
				/>
				<button hidden disabled={!input} type="submit" onClick={handleSendButton}>
					Send Message
				</button>

				<MicIcon className="footer-icon" />
			</InputContainer>
		</Container>
	)
}
