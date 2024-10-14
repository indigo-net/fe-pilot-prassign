import { Navigate, Outlet } from 'react-router-dom'

const UnauthenticatedRoute = () => {
  const authKey = localStorage.getItem('authKey')
  if (authKey) {
    return <Navigate to="/user" replace />
  }
  return <Outlet />
}

export default UnauthenticatedRoute
