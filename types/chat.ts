import firebase from "firebase"

export interface User {
	name?: string
	email?: string
	photoURL?: string
	lastSeen: firebase.firestore.Timestamp
}
