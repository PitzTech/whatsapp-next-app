import styled from "styled-components"

export const Container = styled.div``

const MessageElement = styled.p`
	position: relative;

	width: fit-content;
	min-width: 6rem;

	text-align: center;
	font-size: 1.3rem;
	font-weight: 600;

	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	padding: 1.5rem 1.5rem 2.6rem;
	border-radius: 1rem;

	margin: 1rem;
`

export const Sender = styled(MessageElement)`
	margin-left: auto;
	background: var(--secondary-green);
`

export const Receiver = styled(MessageElement)`
	text-align: left;
	background: var(--primary-background);
`

export const Timestamp = styled.span`
	color: var(--secondary-text);
	font-size: 0.8rem;
	text-align: right;

	padding: 1rem;

	position: absolute;
	bottom: 0;
	right: 0;
`
