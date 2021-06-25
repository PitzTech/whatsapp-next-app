import styled from "styled-components"

export const Container = styled.div``

export const Header = styled.header`
	position: sticky;
	z-index: 99;
	top: 0;

	display: flex;
	align-items: center;
	padding: 1.1rem 2.5rem;
	height: 8rem;

	background-color: var(--secondary-background);
	border-left: 1px solid var(--secondary-background-constrast);
	border-bottom: 1px solid var(--secondary-background-constrast);
`

export const HeaderInfo = styled.div`
	margin-left: 2.2rem;
	flex: 1;

	font-size: 1.15rem;
	h3 {
		margin-top: -5px;
		margin-bottom: 0.3rem;
	}

	p {
		color: var(--secondary-text);
	}
`

export const HeaderIcons = styled.div`
	.header-icon {
		font-size: 2.5rem;
	}
`

export const MessageContainer = styled.section``
