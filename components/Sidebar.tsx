import {
	SidebarContainer,
	Header,
	UserAvatar,
	IconsContainer
} from "../styles/components/Sidebar"

import { IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/More"

function Sidebar() {
	return (
		<SidebarContainer>
			<Header>
				<UserAvatar />

				<IconsContainer>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</IconsContainer>
			</Header>
		</SidebarContainer>
	)
}

export default Sidebar
