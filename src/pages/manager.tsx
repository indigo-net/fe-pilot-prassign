import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/common/bottom-bar'
import Button from '../components/common/button'
import Checkbox from '../components/common/checkbox'
import HighlightText from '../components/common/highlight-text'
import Typography from '../components/common/typography'
import JustArea from '../components/manager/just-area'
import PinPrinter from '../components/manager/pin-printer'
import UserList from '../components/manager/user-list'
import { MAP_STATUS_TO_LABEL } from '../constants/status'
import { QUERY_KEYS } from '../constants/tanstack-key'
import { useUserList } from '../hooks/use-user-list'
import { axiosInstance } from '../libs/axios/axios-instance'
import type { StatusType } from '../types/status-code.type'
import { isNull, isUndefined } from '../utils/type-guard'
import { S } from './manager.s'

type ModeType = 'pin' | 'list'

const Manager = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [mode, setMode] = useState<ModeType>('list')
  const { data: userList, isLoading, error } = useUserList()

  const [selectedTokens, setSelectedTokens] = useState<string[]>([])

  const isPinMode = mode === 'pin'
  const pageTitle = isPinMode ? '식별 코드 (PIN)' : '회원 정보 리스트'

  const onClickPINItem = useCallback(() => setMode('pin'), [])
  const onClickListItem = useCallback(() => setMode('list'), [])
  const onClickExit = useCallback(async () => {
    try {
      await axiosInstance().delete('/prassign/users', {
        params: {
          action: 'all',
        },
      })
      navigate('/')
    } catch {
      console.error('네트워크 문제로,, 종료 실패')
    }
  }, [])
  const onClickRefresh = useCallback(async () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_LIST] })
  }, [])
  const onClickSendNotification = useCallback(async () => {
    if (selectedTokens.length === 0) {
      alert('선택된 회원이 없습니다.')
      return
    }
    try {
      const action = 'notify'
      const tokens = [...selectedTokens]
      const msg =
        '[🚌셔틀버스 X 🦕인디고넷]<br/>이게 곧 경기가 시작됩니다. 준비해주세요.'
      await axiosInstance().post('/prassign/users', {
        action,
        tokens,
        msg,
      })
    } catch {
      alert('알림 보내기 실패')
    }
  }, [selectedTokens])

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
        <S.ListContentContainer>
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
            <>
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
                      <Checkbox
                        onHandleCheckbox={(isChecked: boolean) => {
                          if (isChecked)
                            setSelectedTokens((prev) => [
                              ...prev,
                              user.fcmToken,
                            ])
                          else
                            setSelectedTokens((prev) =>
                              prev.filter(
                                (fcmToken) => fcmToken !== user.fcmToken,
                              ),
                            )
                        }}
                        disabled={user.status !== 'READY'}
                      />
                    </UserList.UserItem>
                  )
                })}
              </UserList.ListArea>
              <S.ButtonContainer>
                <Button size="fit" onClick={onClickRefresh}>
                  새로고침
                </Button>
                <Button
                  size="fit"
                  variant="secondary"
                  onClick={onClickSendNotification}
                >
                  알림 전송
                </Button>
              </S.ButtonContainer>
            </>
          )}
        </S.ListContentContainer>
      )}
      <BottomBar.NavigationList>
        <BottomBar.NavigationItem color="purple" onClick={onClickPINItem}>
          PIN
        </BottomBar.NavigationItem>
        <BottomBar.NavigationItem color="pink" onClick={onClickListItem}>
          LIST
        </BottomBar.NavigationItem>
        <BottomBar.NavigationItem color="alert" onClick={onClickExit}>
          종료
        </BottomBar.NavigationItem>
      </BottomBar.NavigationList>
    </S.PageContainer>
  )
}
export default Manager
