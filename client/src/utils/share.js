export const asyncWrapper = async (method, ...args) => {
	try {
		return await method(...args)
	} catch (error) {
		console.error(error)
	}
}

export const deepCloneObj = (obj) => JSON.parse(JSON.stringify(obj))