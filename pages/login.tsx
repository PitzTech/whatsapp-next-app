import Head from "next/head"
import Image from "next/image"

import {
	LoginScreenContainer,
	LoginContainer,
	Logo,
	GoogleButton
} from "../styles/pages/Login"

import logoImg from "../assets/logo.svg"
import googleIconImg from "../assets/google-icon.svg"

function Login(): JSX.Element {
	return (
		<LoginScreenContainer>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo width={200} height={200} src={logoImg} />
				<GoogleButton className="google-login-button">
					<Image src={googleIconImg} alt="Logo do Google" />
					<span className="google-text">Sign in with Google</span>
				</GoogleButton>
			</LoginContainer>
		</LoginScreenContainer>
	)
}

export default Login
