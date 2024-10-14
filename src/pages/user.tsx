import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavi from '../components/bottom-navi'
import type { StatusType } from '../types/user'
import { S } from './user.s'

const STATUS_CODE = {
  REST: 0 as StatusType,
  READY: 1 as StatusType,
  GAME: 2 as StatusType,
}

const getStatusText = (status: StatusType): string => {
  switch (status) {
    case 0:
      return '휴식'
    case 1:
      return '준비'
    case 2:
      return '게임 중'
    default:
      return '알 수 없음'
  }
}

const User = () => {
  const [status, setStatus] = useState<StatusType>(0)
  const navigate = useNavigate()

  const user = {
    uuid: '23456789ijnbvcfdrtyuj',
    userName: 'Jeff',
    status,
    arriveTimeStamp: 123456789,
  }

  const onClickStatus = (status: StatusType) => setStatus(status)
  const onClickExit = () => {
    localStorage.removeItem('authKey')
    navigate('/')
  }

  return (
    <S.Container>
      <S.StatusText>
        {user.userName} 님의 상태는{' '}
        <strong>{getStatusText(user.status)}</strong> 입니다.
      </S.StatusText>
      <BottomNavi
        items={[
          {
            item: '휴식',
            onClick: () => onClickStatus(STATUS_CODE.REST),
          },
          {
            item: '준비',
            onClick: () => onClickStatus(STATUS_CODE.READY),
          },
          {
            item: '게임 중',
            onClick: () => onClickStatus(STATUS_CODE.GAME),
          },
          {
            item: '퇴장',
            onClick: () => onClickExit(),
          },
        ]}
      />
    </S.Container>
  )
}
export default User
