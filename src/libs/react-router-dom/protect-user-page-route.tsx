import { Navigate, Outlet } from 'react-router-dom'
import { LOCAL_KEY } from '../../constants/web-storage-key'
import { useUser } from '../../hooks/use-user'
import { isNull } from '../../utils/type-guard'
import { removeItemFromLocalStorage } from '../../utils/web-storage-manager'

// 6 시간 이상 접속하지 않으면 로그인 페이지로 리다이렉트
const USER_STALE_TIME = 1000 * 60 * 60 * 6

const ProtectUserPageRoute = () => {
  const { user } = useUser()

  if (isNull(user) || Date.now() - user.arriveTimeStamp > USER_STALE_TIME) {
    removeItemFromLocalStorage(LOCAL_KEY.USER)
    // [Todo]서버에 저장된 회원 정보도 삭제
    return <Navigate to="/user/authentication" replace />
  }
  return <Outlet />
}

export default ProtectUserPageRoute
