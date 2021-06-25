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

export const MessageContainer = styled.section`
	background-color: rgb(229, 221, 213);
	background-position: center;
	background-size: cover;

	padding: 3rem;
	min-height: 90vh;
`

export const EndOfMessages = styled.div``

export const InputContainer = styled.form`
	display: flex;
	align-items: center;

	position: sticky;
	z-index: 99;
	bottom: 0;

	padding: 1rem 2.5rem;
	background: var(--secondary-background);

	grid-auto-flow: column;
	grid-gap: 1.5rem;

	.footer-icon {
		font-size: 2.5rem;
	}
`

export const Input = styled.input`
	flex: 1;
	align-items: center;
	padding: 1rem;

	position: sticky;
	bottom: 0;

	height: 4rem;
	background: var(--primary-background);
	border-radius: 2rem;
`
