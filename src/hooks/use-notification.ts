import { useCallback, useEffect } from 'react'

export const useNotification = () => {
  const getPermission = useCallback(async () => {
    try {
      // 브라우저 지원 여부 확인
      if (!('Notification' in window)) {
        alert(
          '이 브라우저는 알림을 지원하지 않아, 알림 권한을 요청할 수 없습니다.',
        )
        return
      }

      // 이미 거부된 상태라면 다시 요청하지 않음
      if (Notification.permission === 'denied') {
        alert(
          '이전에 알림이 거부되었습니다. 브라우저 설정에서 권한을 변경해주세요.',
        )
        return
      }

      const permission = await Notification.requestPermission()
      return permission === 'granted'
    } catch (error) {
      alert(`알림 권한 요청 중 오류: ${error}`)
    }
  }, [])

  // 알림 권한 재요청 메서드
  const retryPermission = useCallback(async () => {
    if (Notification.permission === 'granted') {
      alert('알림 권한이 획득되었습니다.')
      return
    }

    // 브라우저 지원 여부 확인
    if (!('Notification' in window)) {
      alert('이 브라우저는 알림을 지원하지 않습니다.')
      return
    }

    try {
      const permission = await Notification.requestPermission()
      if (permission === 'denied') {
        alert(
          '알림 권한이 거부되었습니다. 브라우저 설정에서 권한을 변경해주세요.',
        )
      }
    } catch (error) {
      alert(`알림 권한 재요청 중 오류: ${error}`)
    }
  }, [])

  useEffect(() => {
    if (Notification.permission === 'default') {
      getPermission()
    }
  }, [])

  return { retryPermission }
}
