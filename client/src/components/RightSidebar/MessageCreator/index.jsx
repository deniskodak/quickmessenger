import React, { useState } from 'react'
import { sendBotMessage } from '../../../api/openAi'

const MessageCreator = ({ id }) => {
	const [message, setMessage] = useState('')

	const handleChange = ({ target }) => {
		setMessage(target.value)
	}

	const handleSubmit = async () => {
		if (id === 'openAiBot') {
			const response = await sendBotMessage({
				userId: id,
				params: { prompt: message },
			})
            console.log(response, 'response_______________')
		}
	}

	return (
		<div>
			<textarea
				value={message}
				onChange={handleChange}
				placeholder="Type message..."
			/>
			<button onClick={handleSubmit}>submit</button>
		</div>
	)
}

export default MessageCreator
