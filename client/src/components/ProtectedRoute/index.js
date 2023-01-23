import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { user } from '../../store/atom'

const ProtectedRoute = ({ isPrivate, redirectPath = '/login', children }) => {
	const isUser = useRecoilValue(user)
	const isAllowed = isPrivate ? !isUser : isUser
	if (isAllowed) {
		return <Navigate to={redirectPath} replace />
	}

	return children ? children : <Outlet />
}

export default ProtectedRoute
