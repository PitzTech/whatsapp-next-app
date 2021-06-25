import "../styles/globals.css"
import type { AppProps } from "next/app"

import { useState, useEffect } from "react"

import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, database } from "../services/firebase"

import Login from "./login"
import Loading from "../components/Loading"

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading] = useAuthState(auth)
	// const [isAnimationDone, setIsAnimationDone] = useState(false)

	useEffect(() => {
		// window.setTimeout(async () => {
		// 	setIsAnimationDone(true)
		// }, 500)
		if (user) {
			database.collection("users").doc(user.uid).set(
				{
					email: user.email,
					lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
					photoURL: user.photoURL
				},
				{ merge: true }
			)
		}
	}, [])

	if (loading) return <Loading />
	if (!user) return <Login />

	return <Component {...pageProps} />
}
export default MyApp
