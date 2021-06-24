import styled from "styled-components"
import { Avatar, Button } from "@material-ui/core"

export const SidebarContainer = styled.aside``

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 8rem;
	padding: 1.5rem;
	border-bottom: 1px solid var(--secondary-background-constrast);

	position: sticky;
	top: 0;
	z-index: 1;

	background-color: var(--secondary-background);
`

export const UserAvatar = styled(Avatar)`
	cursor: pointer;

	transition: opacity 0.2s;
	:hover {
		opacity: 0.8;
	}
`

export const IconsContainer = styled.div`
	.header-icon {
		font-size: 2.5rem;
	}
`

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: var(--secondary-background);

	width: 100%;
	padding: 0.5rem 0;

	.searchBar {
		background-color: var(--primary-background);
		padding: 0.5rem;
		border-radius: 1rem;

		display: flex;
		align-items: center;

		color: var(--secondary-text);

		input {
			flex: 1;
			background-color: var(--primary-background);
		}
	}
`

export const SidebarButton = styled(Button)`
	width: 100%;

	&&& {
		border-bottom: 1px solid var(--secondary-background-constrast);
		border-top: 1px solid var(--secondary-background-constrast);
	}
`
