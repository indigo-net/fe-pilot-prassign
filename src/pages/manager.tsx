import { useCallback, useState } from 'react'
import BottomBar from '../components/common/bottom-bar'
import Checkbox from '../components/common/checkbox'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import PinPrinter from '../components/manager/pin-printer'
import UserList from '../components/manager/user-list'
import type { StatusCodeType } from '../types/status-code.type'
import type { UserType } from '../types/user'
import { mapCodeToLabel } from '../utils/status'
import { S } from './manager.s'

type ModeType = 'pin' | 'list'

const users: UserType[] = [
  {
    uuid: '45678ㅁㅎㅁ765',
    userName: '윤신0',
    arriveTimeStamp: 123123,
    status: 1,
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
    uuid: '112',
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

  const mapCodeToColor: Record<
    StatusCodeType,
    'violet' | 'skyBlue' | 'purple' | 'pink' | 'alert'
  > = {
    0: 'violet',
    1: 'skyBlue',
    2: 'purple',
  }

  return (
    <S.PageContainer>
      <Typography variant="pageTitle">{pageTitle}</Typography>

      {isPinMode ? (
        <>
          <Typography variant="caption">회원에게만 공개해주세요.</Typography>
          <PinPrinter pin="1111" />
        </>
      ) : (
        <UserList.ListArea>
          {users.map((user) => {
            const statusLabel = mapCodeToLabel(user.status) || ''
            const statusColor = mapCodeToColor[user.status] || 'skyBlue'
            return (
              <UserList.UserItem key={user.uuid}>
                <Typography variant="captionBold">{user.userName}</Typography>

                <Typography variant="captionBold">
                  <HighlightText color={statusColor}>
                    {statusLabel}
                  </HighlightText>
                </Typography>
                <Checkbox disabled={user.status !== 1} />
              </UserList.UserItem>
            )
          })}
        </UserList.ListArea>
      )}
      <BottomBar.NavigationList>
        <BottomBar.NavigationItem color="purple" onClick={onClickPINItem}>
          PIN
        </BottomBar.NavigationItem>
        <BottomBar.NavigationItem color="pink" onClick={onClickListItem}>
          LIST
        </BottomBar.NavigationItem>
      </BottomBar.NavigationList>
    </S.PageContainer>
  )
}
export default Manager
