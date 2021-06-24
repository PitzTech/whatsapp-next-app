import {
	SidebarContainer,
	Header,
	UserAvatar,
	IconsContainer,
	SearchContainer,
	SidebarButton
} from "../styles/components/Sidebar"
import * as EmailValidator from "email-validator"

import { IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/More"
import SearchIcon from "@material-ui/icons/Search"

function Sidebar(): JSX.Element {
	function handleChatCreation() {
		const input = prompt("User email you wanna chat with")

		if (!input) return null

		if (EmailValidator.validate(input)) {
			// add chat to DB chats collection
		}
	}
	return (
		<SidebarContainer>
			<Header>
				<UserAvatar />

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
		</SidebarContainer>
	)
}

export default Sidebar
