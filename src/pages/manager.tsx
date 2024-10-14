import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNavi from '../components/bottom-navi'
import QRBox from '../components/qr-box'
import UserList from '../components/user-list'
import type { UserType } from '../types/user'
import { S } from './manager.s'

type ModeType = 'qr' | 'list'

const users: UserType[] = [
  {
    uuid: '45678765',
    userName: 'ㅁㄴㅇㄹ',
    arriveTimeStamp: 123123,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '2345678',
    userName: '윤신1',
    arriveTimeStamp: 12341,
    status: 1,
    fcmToken: 'abcd',
  },
  {
    uuid: '9876543',
    userName: '윤신2',
    arriveTimeStamp: 43521,
    status: 2,
    fcmToken: 'abcd',
  },
  {
    uuid: '31234112',
    userName: '윤신3',
    arriveTimeStamp: 12321312312321,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '12344321',
    userName: '윤신4',
    arriveTimeStamp: 12321313,
    status: 0,
    fcmToken: 'abcd',
  },
]

const Manager = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<ModeType>('qr')

  const onClickHome = () => navigate('/')

  const onClickQRItem = () => setMode('qr')
  const onClickListItem = () => setMode('list')

  return (
    <S.Container>
      <button onClick={onClickHome}>홈으로</button>
      <h1>Manager</h1>

      {mode === 'qr' ? <QRBox /> : <UserList users={users} />}
      <BottomNavi
        items={[
          { item: 'qr', onClick: onClickQRItem },
          { item: 'list', onClick: onClickListItem },
        ]}
      />
    </S.Container>
  )
}
export default Manager
