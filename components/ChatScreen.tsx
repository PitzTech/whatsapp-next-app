import { useRouter } from "next/router"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth, database } from "../services/firebase"
import { useCollection } from "react-firebase-hooks/firestore"

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

import screenMessageBackground from "../assets/screenMessageBackground.png"

export default function ChatScreen({ chat, messages }): JSX.Element {
	const [user] = useAuthState(auth)
	const router = useRouter()
	const [messagesSnapshot] = useCollection(
		database
			.collection("chats")
			.doc(router.query.id)
			.collection("messages")
			.orderBy("timestamp", "asc")
	)

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
		}
	}

	return (
		<Container>
			<Header>
				<Avatar />

				<HeaderInfo>
					<h3>Receiver Email</h3>
					<p>Last seen ...</p>
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
				{/* {handleShowMessages()} */}
				<EndOfMessages />
			</MessageContainer>

			<InputContainer>
				<InsertEmoticonIcon className="footer-icon" />
				<AttachFileIcon className="footer-icon" />
				<Input />
				<MicIcon className="footer-icon" />
			</InputContainer>
		</Container>
	)
}
