import { auth, database } from "../services/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"

import * as EmailValidator from "email-validator"

import {
	SidebarContainer,
	Header,
	UserAvatar,
	IconsContainer,
	SearchContainer,
	SidebarButton,
	ChatList
} from "../styles/components/Sidebar"

import { IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/More"
import SearchIcon from "@material-ui/icons/Search"

import ChatTab from "./ChatTab"

export default function Sidebar(): JSX.Element {
	const [user] = useAuthState(auth)
	const userChatRef = database
		.collection("chats")
		.where("users", "array-contains", user?.email)
	const [chatsSnapshot] = useCollection(userChatRef)

	function handleAvatarClick(): void {
		auth.signOut()
	}

	function handleChatCreation(): void {
		const input = prompt("User email you wanna chat with")

		if (!input) return

		if (
			EmailValidator.validate(input) &&
			input !== user?.email &&
			!isChatExistent(input)
		) {
			database.collection("chats").add({
				users: [user?.email, input]
			})
		}
	}

	function isChatExistent(receiverEmail: string): boolean {
		return !!chatsSnapshot?.docs.find(
			chat =>
				chat.data().users.find((user: string) => user === receiverEmail)?.length > 0
		)
	}

	return (
		<SidebarContainer>
			<Header>
				<UserAvatar src={user?.photoURL || ""} onClick={handleAvatarClick} />

				<IconsContainer>
					<IconButton>
						<ChatIcon className="header-icon" />
					</IconButton>
					<IconButton>
						<MoreVertIcon className="header-icon" />
					</IconButton>
				</IconsContainer>
			</Header>

			<SearchContainer>
				<div className="searchBar">
					<SearchIcon />
					<input placeholder="Search or start new chat" />
				</div>
			</SearchContainer>

			<SidebarButton onClick={handleChatCreation}>Start a new chat</SidebarButton>

			<ChatList>
				{chatsSnapshot?.docs.map(chat => (
					<ChatTab key={chat.id} id={chat.id} users={chat.data().users} />
				))}
			</ChatList>
		</SidebarContainer>
	)
}
