import { useCallback, useState } from 'react'
import BottomBar from '../components/common/bottom-bar'
import Typography from '../components/common/typography'
import PinPrinter from '../components/manager/pin-printer'
import type { UserType } from '../types/user'
import { S } from './manager.s'

type ModeType = 'pin' | 'list'

const users: UserType[] = [
  {
    uuid: '45678ㅁㅎㅁ765',
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
    uuid: '312341ㅋㅋㅊㅊ12',
    userName: '윤신3',
    arriveTimeStamp: 12321312312321,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '123443ㅁㄴㅇㄹ21',
    userName: '윤신4',
    arriveTimeStamp: 12321313,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '1234a3',
    userName: '윤신5',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },

  {
    uuid: '1234as1231123',
    userName: '윤신6',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },

  {
    uuid: '1234as1233123',
    userName: '윤신7',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '112323',
    userName: '윤신8',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '1234as123ㅁㄴㅇㄹaf123',
    userName: '윤신9',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },
  {
    uuid: '12ㅁㄴㅇㄹaf123',
    userName: '윤신10',
    arriveTimeStamp: 1212321313,
    status: 0,
    fcmToken: 'abcd',
  },
]

const Manager = () => {
  const [mode, setMode] = useState<ModeType>('pin')

  const isPinMode = mode === 'pin'
  const pageTitle = isPinMode ? '식별 코드 (PIN)' : '회원 정보 리스트'

  const onClickPINItem = useCallback(() => setMode('pin'), [])
  const onClickListItem = useCallback(() => setMode('list'), [])

  return (
    <S.PageContainer>
      <Typography variant="pageTitle">{pageTitle}</Typography>

      {isPinMode && (
        <>
          <Typography variant="caption">회원에게만 공개해주세요.</Typography>
          <PinPrinter pin="1111" />
        </>
      )}
      <BottomBar.NavigationList>
        <BottomBar.NavigationItem color="purple" onClick={onClickPINItem}>
          PIN
        </BottomBar.NavigationItem>
        <BottomBar.NavigationItem color="pink" onClick={onClickListItem}>
          LIST
        </BottomBar.NavigationItem>
      </BottomBar.NavigationList>
      {/* <button onClick={onClickHome}>홈으로</button>
      <h1>Manager</h1>

      <S.Content>
        {mode === 'qr' ? <QRBox /> : <UserList users={users} />}
      </S.Content>
      <BottomNavi
        items={[
          { item: 'qr', onClick: onClickQRItem },
          { item: 'list', onClick: onClickListItem },
        ]}
      /> */}
    </S.PageContainer>
  )
}
export default Manager
