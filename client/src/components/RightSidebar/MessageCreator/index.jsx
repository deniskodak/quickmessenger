import React, { useState, useRef, useEffect, useCallback } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { useAutoSizeTextArea } from '../../../utils/hooks'

const MessageCreator = ({ id }) => {
	const [message, setMessage] = useState('')
	const textAreaRef = useRef(null)
	useAutoSizeTextArea(textAreaRef.current, message)

	const handleChange = ({ target }) => {
		setMessage(target.value)
	}

	const onSubmit = useCallback(() => {
		if (!message) return
		console.log(message, 'message')
	}, [message])

	const handleButtonClick = () => onSubmit()
	
	const handleKeyUp = useCallback((e) => {
		console.log(e)
		if(e.keyCode !== '13') return
		onSubmit()
	}, [onSubmit])

	return (
		<div className="absolute bottom-7 right-6 left-6 md:right-8 md:left-8 lg:bottom-7 lg:right-11 lg:left-11 flex items-end">
			<textarea
				value={message}
				onChange={handleChange}
				className="resize-none grow p-4 rounded-xl"
				placeholder="Type message..."
				ref={textAreaRef}
				onKeyDown={handleKeyUp}
				rows={1}
			/>
			<button
				onClick={handleButtonClick}
				className="p-3 mb-1 ml-2 bg-white rounded-full">
				<AiOutlineSend className="text-2xl" />
			</button>
		</div>
	)
}

export default MessageCreator
