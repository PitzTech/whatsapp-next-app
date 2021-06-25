import Head from "next/head"

import Sidebar from "../../components/Sidebar"

import { ChatScreenContainer, ChatContainer } from "../../styles/components/ChatScreen"

export default function Chat(): JSX.Element {
	return (
		<ChatContainer>
			<Head>
				<title>WhatsApp Chat</title>
			</Head>
			<Sidebar />
			<ChatScreenContainer>
				<ChatScreen />
			</ChatScreenContainer>
		</ChatContainer>
	)
}
