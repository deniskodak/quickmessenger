import axios from 'axios'

const url = 'https://quick-messenger-api.onrender.com/v1/openAi/message'

const sendBotMessage = async ({ userId, params }) => {
	try {
		const response = await axios.post(url, { ...params }, { mode: 'no-cors' })
		return response
	} catch (error) {
		console.log(error)
	}
}

export { sendBotMessage }
