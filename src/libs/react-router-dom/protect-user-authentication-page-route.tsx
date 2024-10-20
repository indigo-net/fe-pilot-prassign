import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../../hooks/use-user'
import { isNull } from '../../utils/type-guard'

// 로그인한 사용자는 접근하지 못하도록 설정
const ProtectUserAuthenticationPageRoute = () => {
  const { user } = useUser()
  if (!isNull(user)) return <Navigate to="/user" replace />
  return <Outlet />
}

export default ProtectUserAuthenticationPageRoute
