import styled from "styled-components"

export const ChatContainer = styled.div`
	display: flex;
`

export const ChatScreenContainer = styled.section`
	flex: 1;
	overflow-y: scroll;
	height: 100vh;

	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`
