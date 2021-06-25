import styled from "styled-components"
import { Avatar, Button } from "@material-ui/core"

export const ChatContainer = styled(Button)`
	width: 100%;

	font-size: 1.7rem;

	&&& {
		word-break: break-word;

		padding: 1.5rem 0;
		border-bottom: 1px solid var(--secondary-background-constrast);
		border-top: 1px solid var(--secondary-background-constrast);
	}
`

export const UserAvatar = styled(Avatar)`
	margin-right: 1rem;
`
