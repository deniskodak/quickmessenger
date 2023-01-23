import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { getFirebaseAuth } from './firebase'
import { deepCloneObj } from '../utils/share'
import { writeUserData, checkIsUserExist, createChat, checkIsChatExist } from './database'

const googleProvider = new GoogleAuthProvider()

export const registrationWithEmailAndPassword = async (email, password) => {
	const auth = getFirebaseAuth()
	try {
		const data = await createUserWithEmailAndPassword(auth, email, password)
		const chatId = data.user.uid + data.user.uid
		writeUserData(data)
		createChat({chatId, title: 'Your private chat'})
		return deepCloneObj(data)
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const loginWithEmailAndPassword = async (email, password) => {
	const auth = getFirebaseAuth()
	try {
		const user = await signInWithEmailAndPassword(auth, email, password)
		return deepCloneObj(user)
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const registrationWithGoogle = async (device) => {
	const auth = getFirebaseAuth()
	const signMethod = device === 'mobile' ? signInWithRedirect : signInWithPopup
	try {
		const data = await signMethod(auth, googleProvider)
		const chatId = data.user.uid + data.user.uid
		if (!checkIsUserExist(data)) writeUserData(data)
		console.log(checkIsChatExist(chatId), 'checkIsChatExist(chatId)')
		if (!checkIsChatExist(chatId)) createChat({chatId, title: 'Your private chat'})
		return deepCloneObj(data)
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const logOut = async () => {
	const auth = getFirebaseAuth()
	try {
		await signOut(auth)
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}
