import styled from "styled-components"
import { Avatar, Button } from "@material-ui/core"

export const ChatContainer = styled(Button)`
	width: 100%;

	font-size: 1.7rem;

	&&& {
		word-break: break-word;

		padding: 1.5rem 2rem;
		border-bottom: 1px solid var(--secondary-background-constrast);
		border-top: 1px solid var(--secondary-background-constrast);

		justify-content: flex-start;
	}
`

export const UserAvatar = styled(Avatar)`
	margin-right: 1rem;
`
