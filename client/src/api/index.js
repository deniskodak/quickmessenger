import axios from 'axios'
axios.defaults.baseURL = 'https://quick-messenger-api.onrender.com/'
const getTestMessage = async () => {
	try {
		const data = await axios.get('/v1/message')
        return data
	} catch (error) {
		console.error(error)
	}
}

export { getTestMessage }
