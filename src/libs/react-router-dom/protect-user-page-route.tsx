import { useCallback, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/use-user'
import { isNull } from '../../utils/type-guard'
import { axiosInstance } from '../axios/axios-instance'

// 6 시간 이상 접속하지 않으면 로그인 페이지로 리다이렉트
const USER_STALE_TIME = 1000 * 60 * 60 * 6

const ProtectUserPageRoute = () => {
  const navigate = useNavigate()
  const { user, nullifyUser } = useUser()

  const deleteUser = useCallback(async () => {
    nullifyUser()
    if (user) {
      try {
        await axiosInstance().delete(`/prassign/users`, {
          params: { uuid: user.uuid },
        })
      } catch (error) {
        alert(`잇쿵.. 유저삭제 실패!!\b${error}`)
      }
    }
  }, [nullifyUser, user])

  useEffect(() => {
    if (isNull(user) || Date.now() - user.arriveTimeStamp > USER_STALE_TIME) {
      deleteUser()
      navigate('/user/authentication')
    }
  }, [deleteUser, navigate, user])

  return <Outlet />
}

export default ProtectUserPageRoute
