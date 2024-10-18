import { getToken, onMessage } from 'firebase/messaging'
import { useCallback, useEffect, useState } from 'react'
import {
  NO_FCM_TOKEN,
  NO_FIREBASE_CONTEXT,
  NO_NOTIFICATION_PERMISSION,
  UNKNOWN_ERROR,
} from '../constants/error-message'
import { useFirebaseStore } from '../contexts/firebase-context'
import { isNull } from '../utils/type-guard'

export const useFCM = () => {
  const { messaging } = useFirebaseStore()
  const [fcmToken, setFcmToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [message, setMessage] = useState<any>(null)

  /** FCM 토큰 획득 */
  const getFCMToken = useCallback(async () => {
    if (isNull(messaging)) throw new Error(NO_FIREBASE_CONTEXT)
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      })
      setFcmToken(token)
      setError(null)
      return token
    } catch {
      throw new Error(NO_FCM_TOKEN)
    }
  }, [messaging])

  /** 알림 권한 요청 */
  const requestNotificationPermission = useCallback(async () => {
    setError(null)
    setIsLoading(true)

    if (isNull(messaging)) {
      setError(new Error(NO_FIREBASE_CONTEXT))
      setIsLoading(false)
      return
    }

    const permission = await Notification.requestPermission()
    try {
      // 알림 권한 획득 시
      if (permission === 'granted') {
        try {
          // FCM 토큰 획득 시
          await getFCMToken()
        } catch {
          // FCM 토큰 획득 실패 시
          throw new Error(NO_FCM_TOKEN)
        }
      }
      // 알림 권한 실패 시
      else throw new Error(NO_NOTIFICATION_PERMISSION)
    } catch (error) {
      if (error instanceof Error) setError(error)
      else setError(new Error(UNKNOWN_ERROR))
    } finally {
      setIsLoading(false)
    }
  }, [getFCMToken])

  /** FCM 토큰 획득 요청 */
  useEffect(() => {
    if (isNull(fcmToken) && !isNull(messaging)) requestNotificationPermission()
  }, [fcmToken, messaging, requestNotificationPermission])

  useEffect(() => {
    if (!messaging) return

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received:', payload)
      setMessage(payload)
      console.log(payload)
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [messaging])

  return { fcmToken, isLoading, error }
}
