import { useCallback, useEffect, useState } from 'react'

export const useNotification = () => {
  const [isNotification, setIsNotification] = useState(
    Notification.permission === 'granted', // 초기값 설정
  )

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
        return false
      }

      const permission = await Notification.requestPermission()
      setIsNotification(permission === 'granted')
    } catch (error) {
      alert(`알림 권한 요청 중 오류: ${error}`)
    }
  }, [])

  useEffect(() => {
    getPermission()
  }, [getPermission])

  useEffect(() => {
    if (!isNotification && Notification.permission !== 'default') {
      alert('알림 권한 획득에 실패하여, 기능을 사용하지 못할 수 있습니다.')
    }
  }, [isNotification])
}
