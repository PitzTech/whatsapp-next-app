import styled from "styled-components"
import { Avatar } from "@material-ui/core"

export const SidebarContainer = styled.section``

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: sticky;
	top: 0;
	z-index: 1;

	background-color: var(--primary-background);
`

export const UserAvatar = styled(Avatar)``

export const IconsContainer = styled.div``
