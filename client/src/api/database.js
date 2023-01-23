import { getDatabase, ref, set, onValue } from 'firebase/database'

const db = getDatabase()

export const writeUserData = ({ user }) => {
	const { uid, displayName, email } = user
	set(ref(db, 'users/' + uid), {
		displayName,
		email,
	})
}

export const checkIsUserExist = ({ user }) => {
	const { uid } = user
	let result
	onValue(
		ref(db, '/users/' + uid),
		(snapshot) => {
			result = snapshot.val()
			return snapshot.val()
		},
		{
			onlyOnce: true,
		},
	)
	return result
}

export const checkIsChatExist = (id) => {
	let result
	onValue(
		ref(db, '/chats/' + id),
		(snapshot) => {
			result = snapshot.val()
			return snapshot.val()
		},
		{
			onlyOnce: true,
		},
	)
	return result
}

export const createChat = ({ chatId, title, lastMessage = "", imageUrl = "" }) => {
	set(ref(db, 'chats/' + chatId), {
		title,
		timestamp: new Date().getMilliseconds(),
		imageUrl,
		lastMessage,
	})
}

export const getUserChats = (userId, updateState) => {
	onValue(
		ref(db, '/chats'),
		(snapshot) => {
            const chats = Object.entries(snapshot.val())
            const filteredChats = chats.filter(chat => chat[0].includes(userId)).map(chat => ({id: chat[0], ...chat[1]}))
            updateState(filteredChats)
		},
		{
			onlyOnce: true,
		},
	)
}


export const updateChatMember = ({ chatId, userId }) => {
	set(ref(db, 'member/' + chatId + userId), true)
}

export const addMessage = ({
	chatId,
	messageId,
	username,
	message,
	timestamp,
}) => {
	set(ref(db, 'messages' + chatId + messageId), {
		username,
		message,
		timestamp,
	})
}
