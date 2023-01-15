import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from './firebase'

const googleProvider = new GoogleAuthProvider()

export const registrationWithEmailAndPassword = async (email, password) => {
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password)
		return user
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const loginWithEmailAndPassword = async (email, password) => {
	try {
		const user = await signInWithEmailAndPassword(auth, email, password)
		return user
	} catch(error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const registrationWithGoogle = async (device) => {
	const signMethod = device === 'mobile' ? signInWithRedirect : signInWithPopup
	try {
		const credentials = await signMethod(auth, googleProvider)
		return credentials	
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}

export const logOut = async () => {
	try {
		await signOut(auth)
	} catch(error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}