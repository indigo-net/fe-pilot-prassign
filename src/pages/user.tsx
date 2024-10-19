import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/common/bottom-bar'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import { ARRAY_STATUS, MAP_STATUS_TO_LABEL } from '../constants/status'
import { axiosInstance } from '../libs/axios/axios-instance'
import type { StatusType } from '../types/status-code.type'
import { S } from './user.s'

const User = () => {
  const [statusValue, setStatusValue] = useState<StatusType>('REST')
  const navigate = useNavigate()
  const userName = useMemo(() => {
    return localStorage.getItem('userName') ?? 'Unknown Player'
  }, [])

  const onClickStatus = async (status: StatusType) => {
    const prevStatusValue = statusValue

    const action = 'update'
    const uuid = localStorage.getItem('uuid')
    const requestBody = {
      action,
      uuid,
      status: statusValue,
    }
    try {
      setStatusValue(status)
      await axiosInstance().put('/prassign/users', requestBody)
    } catch {
      setStatusValue(prevStatusValue)
      console.error('서버 상태 업데이트 불가')
    }
  }

  const onClickExit = useCallback(async () => {
    const uuid = localStorage.getItem('uuid')
    try {
      await axiosInstance().delete(`/prassign/users`, { params: { uuid } })
      localStorage.removeItem('authKey')
      localStorage.removeItem('uuid')
      localStorage.removeItem('userName')
      navigate('/')
    } catch {
      console.error('네트워크 에러로.. 퇴장 불가')
    }
  }, [navigate])

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
            <HighlightText color={statusNColorMap[statusValue]}>
              {MAP_STATUS_TO_LABEL[statusValue]}
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
          퇴장
        </BottomBar.NavigationItem>
      </BottomBar.NavigationList>
    </S.PageContainer>
  )
}
export default User
