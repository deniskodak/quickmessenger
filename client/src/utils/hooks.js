import { useEffect, useState, useCallback } from 'react'

export const useAutoSizeTextArea = (textAreaRef, value) => {
	useEffect(() => {
		if (textAreaRef) {
			textAreaRef.style.height = '0px'
			const scrollHeight = textAreaRef.scrollHeight

			textAreaRef.style.height = scrollHeight + 'px'
		}
	}, [textAreaRef, value])
}

export const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return
			}
			handler(event)
		}
		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	})
}

export const useAsyncWrapper = ({method, params, updateState}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)

	const getData = useCallback(async () => {
		setIsLoading(true)
		try {
			const data = await method(params, updateState)
			console.log(data, 'hook data')
			setData(data)
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}, [method, params, updateState])

	useEffect(() => {
		getData()
	}, [getData])
	return [data, isLoading]
}
