import Head from "next/head"
import Image from "next/image"

import { LoginContainer, Logo } from "../styles/pages/Login"

import logoImg from "../assets/logo.svg"
import googleIconImg from "../assets/google-icon.svg"

function Login(): JSX.Element {
	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo src={logoImg} />
				<button className="google-login-button">
					<Image src={googleIconImg} alt="Logo do Google" />
					<span className="google-text">Sign in with Google</span>
				</button>
			</LoginContainer>
		</div>
	)
}

export default Login
