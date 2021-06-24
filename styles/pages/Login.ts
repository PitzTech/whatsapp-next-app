import styled from "styled-components"
import Image from "next/image"

export const LoginScreenContainer = styled.div`
	height: 100vh;

	display: grid;
	place-items: center;

	background-color: var(--secondary-background);
`

export const LoginContainer = styled.section`
	position: relative;

	display: flex;
	flex-direction: column;

	padding: 8rem;
	border-radius: 2rem;

	background-color: var(--primary-background);
	box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.5);
`

export const Logo = styled(Image)``

export const GoogleButton = styled.button`
	margin-top: 4rem;
	height: 5rem;
	padding: 0 5rem;
	border: 0;
	border-radius: 8px;

	font-weight: 500;
	background: #ea4335;
	box-shadow: 0px 5px 10px -1px rgba(0, 0, 0, 0.5);
	color: #fff;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	transition: filter 0.2s;

	.google-text {
		margin-left: 1rem;
	}

	&:hover {
		filter: brightness(0.9);
	}
`
