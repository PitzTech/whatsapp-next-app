import Head from "next/head"

// Firebase

import { auth, database } from "../../services/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

// Utils / Types

import { getReceiverEmail } from "../../utils/getUserData"
import { User } from "../../types/chat"

// Components

import Sidebar from "../../components/Sidebar"
import ChatScreen from "../../components/ChatScreen"

// Styles

import { ChatScreenContainer, ChatContainer } from "../../styles/components/Chat"

export default function Chat({ chat, messages }): JSX.Element {
	const [user] = useAuthState(auth)

	return (
		<ChatContainer>
			<Head>
				<title>Chat with {getReceiverEmail(chat.users, user as User)}</title>
			</Head>
			<Sidebar />
			<ChatScreenContainer>
				<ChatScreen chat={chat} messages={messages} />
			</ChatScreenContainer>
		</ChatContainer>
	)
}

// Server Processing
export async function getServerSideProps(context) {
	const ref = database.collection("chats").doc(context.query.id)

	// Prepare the message on server-side

	// prettier-ignore
	const messagesRes = await ref
		.collection("messages")
		.orderBy("timestamp", "asc")
		.get()

	const messages = messagesRes.docs
		.map(doc => ({
			id: doc.id,
			...doc.data()
		})) // when you stringify you lose the timestamp
		.map(messages => ({
			...messages,
			timestamp: messages.timestamp.toDate().getTime() // FIX-ALERT: find the timestamp firestore.Firestamp Type
		}))

	// Prepara the chats on server-side

	const chatResponse = await ref.get()
	const chat = {
		id: chatResponse.id,
		...chatResponse.data()
	}

	// Return Pre-Rendered Props
	return {
		props: {
			messages: JSON.stringify(messages),
			chat: chat
		}
	}
}
