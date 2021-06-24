import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyBRnQfcPOhXPhR8o3DJkccOXhqfhKjdstQ",
	authDomain: "whatsapp-next-clone-72db0.firebaseapp.com",
	projectId: "whatsapp-next-clone-72db0",
	storageBucket: "whatsapp-next-clone-72db0.appspot.com",
	messagingSenderId: "164661175644",
	appId: "1:164661175644:web:6e51b23e07de746dfc4d99"
}

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app()

const auth = app.auth()
const database = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, database, provider }
