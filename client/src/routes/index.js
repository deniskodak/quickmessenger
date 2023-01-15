import { createHashRouter } from 'react-router-dom'

import ProtectedRoute from '../components/ProtectedRoute'
import Login from '../Pages/Login'
import Main from '../Pages/Main'

const router = createHashRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute isPrivate>
				<Main />
			</ProtectedRoute>
		),
		errorElement: <h1>not found</h1>,
	},
	{
		path: '/login',
		element: (
			<ProtectedRoute redirectPath="/">
				<Login />
			</ProtectedRoute>
		),
	},
])

export default router
