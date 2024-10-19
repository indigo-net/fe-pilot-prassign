import { useCallback, useState } from 'react'
import BottomBar from '../components/common/bottom-bar'
import Checkbox from '../components/common/checkbox'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import JustArea from '../components/manager/just-area'
import PinPrinter from '../components/manager/pin-printer'
import UserList from '../components/manager/user-list'
import { MAP_STATUS_TO_LABEL } from '../constants/status'
import { useUserList } from '../hooks/use-user-list'
import type { StatusType } from '../types/status-code.type'
import { isNull, isUndefined } from '../utils/type-guard'
import { S } from './manager.s'

type ModeType = 'pin' | 'list'

const Manager = () => {
  const [mode, setMode] = useState<ModeType>('pin')
  const { data: userList, isLoading, error } = useUserList()

  const isPinMode = mode === 'pin'
  const pageTitle = isPinMode ? '식별 코드 (PIN)' : '회원 정보 리스트'

  const onClickPINItem = useCallback(() => setMode('pin'), [])
  const onClickListItem = useCallback(() => setMode('list'), [])

  const mapCodeToColor: Record<
    StatusType,
    'violet' | 'skyBlue' | 'purple' | 'pink' | 'alert'
  > = {
    REST: 'violet',
    READY: 'skyBlue',
    GAME: 'purple',
  }
  const isError = !isLoading && (!isNull(error) || isUndefined(userList))
  const isUserList = !isLoading && !isError

  return (
    <S.PageContainer>
      <Typography variant="pageTitle">{pageTitle}</Typography>

      {isPinMode ? (
        <>
          <Typography variant="caption">회원에게만 공개해주세요.</Typography>
          <PinPrinter pin="1111" />
        </>
      ) : (
        <>
          {isError && (
            <JustArea>
              <Typography variant="captionBold">에러 발생..</Typography>
            </JustArea>
          )}
          {isLoading && (
            <JustArea>
              <Typography variant="captionBold">로딩 중..</Typography>
            </JustArea>
          )}
          {isUserList && (
            <UserList.ListArea>
              {userList?.map((user) => {
                const statusLabel =
                  MAP_STATUS_TO_LABEL[user.status as StatusType] || ''
                const statusColor =
                  mapCodeToColor[user.status as StatusType] || 'skyBlue'
                return (
                  <UserList.UserItem key={user.uuid}>
                    <Typography variant="captionBold">
                      {user.userName}
                    </Typography>

                    <Typography variant="captionBold">
                      <HighlightText color={statusColor}>
                        {statusLabel}
                      </HighlightText>
                    </Typography>
                    <Checkbox disabled={user.status !== 'READY'} />
                  </UserList.UserItem>
                )
              })}
            </UserList.ListArea>
          )}
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
    </S.PageContainer>
  )
}
export default Manager
