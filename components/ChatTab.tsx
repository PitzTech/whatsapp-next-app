import { useRouter } from "next/router"

import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, database } from "../services/firebase"

import { getReceiverEmail } from "../utils/getUserData"
import { User } from "../types/chat"

import { ChatContainer, UserAvatar } from "../styles/components/ChatTab"
interface ChatProps {
	id: string
	users: string[]
}

export default function ChatTab({ id, users }: ChatProps): JSX.Element {
	const router = useRouter()

	const [user] = useAuthState(auth)
	const receiverEmail = getReceiverEmail(users, user as User)
	const [receiverSnapshot] = useCollection(
		database.collection("users").where("email", "==", receiverEmail)
	)
	const receiverData = receiverSnapshot?.docs?.[0]?.data() as User

	function handleEnterChat(): void {
		router.push(`/chat/${id}`)
	}

	return (
		<ChatContainer onClick={handleEnterChat}>
			{receiverData ? (
				<UserAvatar src={receiverData?.photoURL} />
			) : (
				<UserAvatar>{receiverEmail[0].toUpperCase()}</UserAvatar>
			)}

			<p>{receiverData?.name || receiverEmail}</p>
		</ChatContainer>
	)
}
