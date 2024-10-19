import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/common/bottom-bar'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import { STATUS } from '../constants/status'
import { axiosInstance } from '../libs/axios/axios-instance'
import type { StatusValueType } from '../types/status-code.type'
import { S } from './user.s'

const User = () => {
  const [statusValue, setStatusValue] = useState<StatusValueType>('REST')
  const navigate = useNavigate()
  const username = useMemo(() => {
    return localStorage.getItem('username') ?? 'Unknown Player'
  }, [])

  const onClickStatus = async (status: StatusValueType) => {
    const prevStatusValue = statusValue

    const action = 'update'
    const uuid = localStorage.getItem('uuid')
    const requestBody = {
      action,
      uuid,
      status: statusValue,
    }
    try {
      setStatusValue(STATUS[status].value)
      await axiosInstance().put('/prassign/users', requestBody)
    } catch {
      setStatusValue(prevStatusValue)
      console.error('서버 상태 업데이트 불가')
    }
  }

  const onClickExit = useCallback(() => {
    localStorage.removeItem('authKey')
    navigate('/')
  }, [navigate])

  const statusNColorMap: Record<
    StatusValueType,
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
          <Typography variant="bigInfo">{username} 님은</Typography>
          <Typography variant="bigInfo">
            <HighlightText color={statusNColorMap[statusValue]}>
              {STATUS[statusValue].label}
            </HighlightText>{' '}
            상태입니다.
          </Typography>
        </S.UserInfoContainer>
      </S.PageContentContainer>

      <BottomBar.NavigationList>
        {Object.values(STATUS).map((status) => (
          <BottomBar.NavigationItem
            key={status.value}
            onClick={() => onClickStatus(status.value)}
            color={statusNColorMap[status.value]}
          >
            {status.label}
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
