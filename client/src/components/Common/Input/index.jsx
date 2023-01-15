import React, { useState, useEffect } from 'react'
import {
	INPUTS_STATUS,
	EMAIL_REGEX,
	PASSWORD_REGEX,
} from '../../../utils/const'
const { error, success, initial } = INPUTS_STATUS

const REGEX_CONFIG = {
	email: EMAIL_REGEX,
	password: PASSWORD_REGEX,
}

const Input = ({
	type = 'text',
	value,
	onChange,
	placeholder = 'Search',
	additionalWindClasses = '',
	label,
	status = initial,
}) => {
	const [text, setText] = useState(value || '')
	const [currentStatus, setCurrentStatus] = useState(status)
	const [isFocused, setIsFocused] = useState(false)

	const inputStatusClasses = {
		error: 'border-red-500 hover:border-red-700 focus:border-red-700',
		success: 'border-lime-600 hover:border-lime-700 focus:border-lime-700',
		initial: 'border-slate-300 hover:border-teal-500 focus:border-teal-500',
	}

	const transitionClasses = 'transition-colors duration-200 ease-in'
	const labelStatusClasses = currentStatus === error ? 'text-red-500' : 'text-slate-300'
	const labelFocusedClasses = isFocused ? 'text-teal-500' : labelStatusClasses

	useEffect(() => {
		setText(value)
	}, [value])

	useEffect(() => {
		setCurrentStatus(status)
	}, [status])

	const getRegexStatus = (text) => {
		if (type === 'text') return initial
		const currentRegex = REGEX_CONFIG[type]
		const isRegexValid = currentRegex.test(text)
		return isRegexValid ? success : error
	}

	const handleChange = ({ target }) => {
		setText(target.value)
		const status = getRegexStatus(target.value)
		setCurrentStatus(status)
		onChange && onChange({ value: target.value, status: status })
	}

	return (
		<>
			<label>
				{label ? (
					<span
						className={`block mb-1 font-semibold cursor-pointer ${labelFocusedClasses} ${transitionClasses}`}>
						{label}
					</span>
				) : null}
				<input
					class={`${transitionClasses} grow border-2 outline-0 px-4 py-1 rounded-lg bg-transparent text-white placeholder:text-slate-300 ${additionalWindClasses} ${inputStatusClasses[currentStatus]}`}
					value={text}
					type={type === "email" ? 'text' : type}
					onChange={handleChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={placeholder}
					autoComplete={type === 'password' ? 'on' : 'off'}
				/>
			</label>
		</>
	)
}

export default Input
