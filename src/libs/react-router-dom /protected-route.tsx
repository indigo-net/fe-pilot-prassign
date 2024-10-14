import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const authKey = localStorage.getItem('authKey')
  if (!authKey) {
    return <Navigate to="/user/authentication" replace />
  }
  return <Outlet />
}

export default ProtectedRoute
