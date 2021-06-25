import styled from "styled-components"
import { Avatar, Button } from "@material-ui/core"

export const SidebarContainer = styled.aside`
	width: 30rem;
	height: 100vh;

	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
	--ms-overflow-style: none;
	scrollbar-width: none;

	border-right: 1px solid var(--secondary-background-constrast);
`

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

	background: var(--secondary-background);
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
	position: sticky;
	top: 8rem;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	background: var(--secondary-background);

	width: 100%;
	padding: 1rem 0;

	.searchBar {
		background: var(--primary-background);
		padding: 1rem;
		border-radius: 1rem;
		width: 90%;

		display: flex;
		align-items: center;

		color: var(--secondary-text);

		input {
			flex: 1;
			background-color: var(--primary-background);
		}
	}
`

export const ChatList = styled.div``
