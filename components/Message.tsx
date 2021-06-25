import { Container } from "../styles/components/Message"

export default function Message({ user, message }): JSX.Element {
	console.log(message)
	return (
		<Container>
			<p>{message.message}</p>
		</Container>
	)
}
