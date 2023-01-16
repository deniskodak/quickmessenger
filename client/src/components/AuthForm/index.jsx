import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { withBreakpoints } from 'react-breakpoints'
import { FcGoogle } from 'react-icons/fc'

import Input from '../Common/Input'
import Button from '../Common/Button'
import Loader from '../Common/Loader'

import { user } from '../../store/atom'
import { INPUTS_STATUS } from '../../utils/const'
import {
	loginWithEmailAndPassword,
	registrationWithEmailAndPassword,
	registrationWithGoogle,
} from '../../api/auth'
import { useEffect } from 'react'

const { error, success, initial } = INPUTS_STATUS

const AuthForm = ({ isRegistration, currentBreakpoint }) => {
	const [, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState({ value: '', status: initial })
	const [password, setPassword] = useState({ value: '', status: initial })
	const [confirmPassword, setConfirmPassword] = useState({
		value: '',
		status: initial,
	})
	const [isLoading, setIsLoading] = useState(false)

	const commonInputClasses = 'w-full mb-4'

	const handleRefreshFields = () => {
		const initialState = { value: '', status: initial }
		setEmail(initialState)
		setPassword(initialState)
		setConfirmPassword(initialState)
	}

	useEffect(() => {
		handleRefreshFields()
	}, [isRegistration])

	const validateFields = () => {
		const isEmailInvalid = email.status !== success || !email.value
		const isPasswordInvalid = password.status !== success || !password.value
		const isConfirmPasswordInvalid = isRegistration
			? confirmPassword.status !== success || !confirmPassword.value
			: false

		if (isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid) {
			if (isEmailInvalid) setEmail({ ...email, status: error })
			if (isPasswordInvalid) setPassword({ ...password, status: error })
			if (isConfirmPasswordInvalid)
				setConfirmPassword({ ...confirmPassword, status: error })
			return false
		}

		return true
	}

	const handleSignClick = async () => {
		const areFieldsValid = validateFields()
		if (!areFieldsValid) return false

		const authMethod = isRegistration
			? registrationWithEmailAndPassword
			: loginWithEmailAndPassword

		setIsLoading(true)

		try {
			const data = await authMethod(email.value, password.value)
			setUserData(data.user)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	const handleGoogleBtnClick = async () => {
		setIsLoading(true)
		try {
			const data = await registrationWithGoogle(currentBreakpoint)

			setUserData(data.user)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	const comparePasswords = (text) => {
		return text === password.value
	}

	const handleConfirmChange = ({ value }) => {
		const isPasswordEqual = comparePasswords(value)
		const confirmStatus = isPasswordEqual ? success : error
		console.log(confirmStatus, 'confirm')
		setConfirmPassword({ value, status: confirmStatus })
	}

	return (
		<form>
			<Loader loading={isLoading}>
				<Input
					value={email.value}
					onChange={setEmail}
					status={email.status}
					label="Email"
					placeholder="Type your email"
					additionalWindClasses={commonInputClasses}
					type="email"
				/>
				<Input
					type="password"
					value={password.value}
					onChange={setPassword}
					status={password.status}
					label="Password"
					placeholder="Type your password"
					additionalWindClasses={commonInputClasses}
				/>
				{isRegistration && (
					<Input
						type="password"
						value={confirmPassword.value}
						onChange={handleConfirmChange}
						status={confirmPassword.status}
						label="Confirm password"
						placeholder="Type your password again"
						additionalWindClasses={commonInputClasses}
					/>
				)}
				<Button
					title={isRegistration ? 'Sign up' : 'Sign in'}
					onClick={handleSignClick}
				/>
				<span className="mx-4 text-slate-300 font-semibold">Or</span>
				<Button
					title="Sign with"
					icon={<FcGoogle className="inline ml-1 w-4 h-4" />}
					onClick={handleGoogleBtnClick}
				/>
			</Loader>
		</form>
	)
}

export default withBreakpoints(AuthForm)
