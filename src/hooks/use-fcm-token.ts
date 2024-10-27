import type { Messaging } from 'firebase/messaging'
import { getToken } from 'firebase/messaging'
import { useCallback, useState } from 'react'
import { NO_FCM_TOKEN, NO_FIREBASE_CONTEXT } from '../constants/error-message'
import { LOCAL_KEY } from '../constants/web-storage-key'
import { useFirebaseStore } from '../contexts/firebase-context'
import type { UserType } from '../types/user'
import { isNull } from '../utils/type-guard'
import { getItemFromLocalStorage } from '../utils/web-storage-manager'

export const useFCMToken = () => {
  const { messaging } = useFirebaseStore()
  const [token, setToken] = useState<string | null>(
    getItemFromLocalStorage<UserType>(LOCAL_KEY.USER)?.fcmToken ?? null,
  )
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 환경 체크 함수
  const checkEnvironment = useCallback((): {
    isSupported: boolean
    message?: string
  } => {
    // 서비스 워커 지원 확인
    if (!('serviceWorker' in navigator)) {
      return {
        isSupported: false,
        message: '이 브라우저는 푸시 알림을 지원하지 않습니다.',
      }
    }

    // 알림 API 지원 확인
    if (!('Notification' in window)) {
      return {
        isSupported: false,
        message: '이 브라우저는 알림을 지원하지 않습니다.',
      }
    }

    // iOS Safari 체크
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

    if (isIOS && isSafari) {
      // iOS 16.4 이상 체크 (정확한 버전 체크는 어려울 수 있음)
      const isStandalone = window.matchMedia(
        '(display-mode: standalone)',
      ).matches
      if (!isStandalone) {
        return {
          isSupported: false,
          message: '홈 화면에 추가한 후 앱에서 실행해주세요.',
        }
      }
    }

    return { isSupported: true }
  }, [])

  const getFCMToken = useCallback(
    async (messaging: Messaging): Promise<string> => {
      try {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        })
        if (isNull(token)) throw new Error(NO_FCM_TOKEN)
        return token
      } catch {
        throw new Error(NO_FCM_TOKEN)
      }
    },
    [],
  )

  const requestToken = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)
    setError(null)

    let newToken: string | null = null

    try {
      // 환경 체크
      const { isSupported, message } = checkEnvironment()
      if (!isSupported) {
        throw new Error(message || '알림을 지원하지 않는 환경입니다.')
      }

      // 알림 권한 체크
      if (window.Notification.permission === 'denied') {
        throw new Error(
          '알림 권한이 거부되었습니다. 브라우저 설정에서 권한을 변경해주세요.',
        )
      }

      // 알림 권한 요청
      if (window.Notification.permission === 'default') {
        const permission = await window.Notification.requestPermission()
        if (permission !== 'granted') {
          throw new Error('알림 권한이 거부되었습니다.')
        }
      }

      if (isNull(messaging)) throw new Error(NO_FIREBASE_CONTEXT)
      newToken = await getFCMToken(messaging)
      setToken(newToken)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : NO_FCM_TOKEN
      setError(new Error(errorMessage))
      throw new Error(errorMessage)
    } finally {
      setIsLoading(false)
    }

    return newToken
  }, [messaging, getFCMToken, checkEnvironment])

  return {
    token,
    isLoading,
    error,
    requestToken,
  }
}
