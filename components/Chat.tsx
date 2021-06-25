import { ChatContainer, UserAvatar } from "../styles/components/Chat"

interface ChatProps {
	id: string
	users: string[]
}

export default function Chat({ id, users }: ChatProps): JSX.Element {
	return (
		<ChatContainer>
			<UserAvatar />
			<p>Recipient Email</p>
		</ChatContainer>
	)
}
