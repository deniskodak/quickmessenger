import axios from 'axios'

const url = 'https://quik-messenger-api.onrender.com/api/v1/openAi/message'

const sendBotMessage = async ({ userId, params }) => {
	try {
		const response = await axios.post(url, {...params})
        return response
	} catch (error) {
		console.log(error)
	}
}

export { sendBotMessage }
