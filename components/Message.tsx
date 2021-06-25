import { Container } from "../styles/components/Message"

export default function Message({ user, message }): JSX.Element {
	return (
		<Container>
			<p>{message}</p>
		</Container>
	)
}
