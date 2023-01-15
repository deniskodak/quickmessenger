import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
	return (
		<React.StrictMode>
			<RouterProvider
				router={router}
				fallbackElement={<h1>loading....</h1>}
			/>
		</React.StrictMode>
	)
}

export default App
