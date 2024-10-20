import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/common/bottom-bar'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import { NO_USER } from '../constants/alert-message'
import { ARRAY_STATUS, MAP_STATUS_TO_LABEL } from '../constants/status'
import { LOCAL_KEY } from '../constants/web-storage-key'
import { useFCM } from '../hooks/use-fcm'
import { useUser } from '../hooks/use-user'
import { axiosInstance } from '../libs/axios/axios-instance'
import type { StatusType } from '../types/status-code.type'
import { isNull } from '../utils/type-guard'
import { removeItemFromLocalStorage } from '../utils/web-storage-manager'
import { S } from './user.s'

const User = () => {
  const navigate = useNavigate()
  const { user, setUserStatus } = useUser()
  useFCM()

  const userName = user?.userName ?? 'Unknown Player'
  const userStatus = user?.status ?? 'REST'

  const onClickStatus = useCallback(
    async (newStatus: StatusType) => {
      if (isNull(user)) {
        alert(NO_USER)
        removeItemFromLocalStorage(LOCAL_KEY.USER)
        return
      }

      const uuid = user.uuid
      const prevStatus = user.status

      const requestBody = {
        action: 'update',
        uuid,
        status: newStatus,
      }
      try {
        await axiosInstance().put('/prassign/users', requestBody)
        setUserStatus(newStatus)
      } catch {
        setUserStatus(prevStatus)
        console.error('서버 상태 업데이트 불가')
      }
    },
    [user, setUserStatus],
  )

  const onClickExit = useCallback(async () => {
    if (isNull(user)) {
      alert(NO_USER)
      removeItemFromLocalStorage(LOCAL_KEY.USER)
      return
    }
    const uuid = user.uuid
    try {
      await axiosInstance().delete(`/prassign/users`, {
        params: { uuid },
      })
      removeItemFromLocalStorage(LOCAL_KEY.USER)
      navigate('/')
    } catch {
      console.error('네트워크 에러로.. 퇴장 불가')
    }
  }, [navigate, user])

  const statusNColorMap: Record<
    StatusType,
    'violet' | 'skyBlue' | 'purple' | 'pink' | 'alert'
  > = useMemo(
    () => ({
      REST: 'violet',
      READY: 'skyBlue',
      GAME: 'purple',
    }),
    [],
  )

  return (
    <S.PageContainer>
      <S.PageContentContainer>
        <Typography variant="pageTitle">회원 페이지</Typography>
        <S.UserInfoContainer>
          <Typography variant="bigInfo">{userName} 님은</Typography>
          <Typography variant="bigInfo">
            <HighlightText color={statusNColorMap[userStatus]}>
              {MAP_STATUS_TO_LABEL[userStatus]}
            </HighlightText>{' '}
            상태입니다.
          </Typography>
        </S.UserInfoContainer>
      </S.PageContentContainer>

      <BottomBar.NavigationList>
        {ARRAY_STATUS.map((status) => (
          <BottomBar.NavigationItem
            key={status}
            onClick={() => onClickStatus(status)}
            color={statusNColorMap[status]}
          >
            {status}
          </BottomBar.NavigationItem>
        ))}
        <BottomBar.NavigationItem color="alert" onClick={onClickExit}>
          EXIT
        </BottomBar.NavigationItem>
      </BottomBar.NavigationList>
    </S.PageContainer>
  )
}
export default User
