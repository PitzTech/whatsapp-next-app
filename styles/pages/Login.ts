import styled from "styled-components"
import Image from "next/image"
import { Button } from "@material-ui/core"

export const LoginContainer = styled.section`
	.google-login-button {
		margin-top: 2rem;
		height: 5rem;
		padding: 2rem;
		border-radius: 8px;
		font-weight: 500;
		background: #ea4335;
		color: #fff;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;
		border: 0;

		transition: filter 0.2s;

		.google-text {
			margin-left: 1rem;
		}

		&:hover {
			filter: brightness(0.9);
		}
	}
`

export const Logo = styled(Image)``
