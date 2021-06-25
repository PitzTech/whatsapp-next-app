import Head from "next/head"
import Image from "next/image"

import { auth, provider } from "../services/firebase"

import {
	LoginScreenContainer,
	LoginContainer,
	Logo,
	GoogleButton
} from "../styles/pages/Login"

import logoImg from "../assets/logo.svg"
import googleIconImg from "../assets/google-icon.svg"

function Login(): JSX.Element {
	function handleSignIn() {
		auth.signInWithPopup(provider).catch(alert)
	}

	return (
		<LoginScreenContainer>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContainer>
				<Logo width={200} height={200} src={logoImg} alt="Whats app Logo" />
				<GoogleButton onClick={handleSignIn} className="google-login-button">
					<Image src={googleIconImg} alt="Logo do Google" />
					<span className="google-text">Sign in with Google</span>
				</GoogleButton>
			</LoginContainer>
		</LoginScreenContainer>
	)
}

export default Login
