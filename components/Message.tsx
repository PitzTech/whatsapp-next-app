import moment from "moment"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../services/firebase"

import { Container, Sender, Receiver, Timestamp } from "../styles/components/Message"

export default function Message({ user, message }): JSX.Element {
	const [useLoggedIn] = useAuthState(auth)

	const WhoSend = user === useLoggedIn?.email ? Sender : Receiver

	return (
		<Container>
			<WhoSend>
				{message.message}
				{/* LT => HH:mm */}
				<Timestamp>
					{message.timestamp ? moment(message.timestamp).format("LT") : "..."}{" "}
				</Timestamp>
			</WhoSend>
		</Container>
	)
}
