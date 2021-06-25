import { User } from "../types/chat"

export function getReceiverEmail(users: string[], userLoggedIn: User): string {
	return users?.filter(userToFilter => userToFilter !== userLoggedIn?.email)[0]
}
