import { useRouter } from "next/router"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../services/firebase"

import {
	Container,
	Header,
	HeaderInfo,
	HeaderIcons,
	MessageContainer
} from "../styles/components/ChatScreen"

import MoreVertIcon from "@material-ui/icons/moreVert"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import { Avatar, IconButton } from "@material-ui/core"

export default function ChatScreen({ chat, messages }): JSX.Element {
	const [user] = useAuthState(auth)
	const router = useRouter()

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
						<AttachFileIcon className="header-icon" />
					</IconButton>
					<IconButton>
						<MoreVertIcon className="header-icon" />
					</IconButton>
				</HeaderIcons>
			</Header>

			<MessageContainer></MessageContainer>
		</Container>
	)
}
