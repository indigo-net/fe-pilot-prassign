import type { Messaging } from 'firebase/messaging'
import { getToken, onMessage } from 'firebase/messaging'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  NO_FCM_TOKEN,
  NO_FIREBASE_CONTEXT,
  NO_NOTIFICATION_PERMISSION,
  UNKNOWN_ERROR,
} from '../constants/error-message'
import { LOCAL_KEY } from '../constants/web-storage-key'
import { useFirebaseStore } from '../contexts/firebase-context'
import { isNull } from '../utils/type-guard'
import { getItemFromLocalStorage } from '../utils/web-storage-manager'

type FCMStateType = {
  token: string | null
  isLoading: boolean
  error: Error | null
  message: unknown | null
}

export const useFCM = () => {
  const { messaging } = useFirebaseStore()
  const [state, setState] = useState<FCMStateType>({
    token: getItemFromLocalStorage<string>(LOCAL_KEY.FCM_TOKEN),
    isLoading: false,
    error: null,
    message: null,
  })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const setPartialState = (partialState: Partial<FCMStateType>) => {
    setState((prevState) => ({ ...prevState, ...partialState }))
  }

  const getFCMToken = useCallback(
    async (messaging: Messaging): Promise<string> => {
      try {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        })
        if (!token) throw new Error(NO_FCM_TOKEN)
        return token
      } catch {
        throw new Error(NO_FCM_TOKEN)
      }
    },
    [],
  )

  const requestNotificationPermission =
    useCallback(async (): Promise<string> => {
      setPartialState({ isLoading: true, error: null })

      try {
        if (isNull(messaging)) throw new Error(NO_FIREBASE_CONTEXT)

        const permission = await Notification.requestPermission()
        if (permission !== 'granted')
          throw new Error(NO_NOTIFICATION_PERMISSION)

        const token = await getFCMToken(messaging)
        setPartialState({ token, isLoading: false })
        return token
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : UNKNOWN_ERROR
        setPartialState({ error: new Error(errorMessage), isLoading: false })
        throw error
      }
    }, [messaging, getFCMToken])

  useEffect(() => {
    if (!messaging) return

    // 오디오 객체 생성 및 로드
    audioRef.current = new Audio('/audio/klaxon.mp3')
    audioRef.current.load()

    const unsubscribe = onMessage(messaging, (payload) => {
      setPartialState({ message: payload })
      console.log('payload', payload)

      // 소리 재생
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error)
          if (error.name === 'NotAllowedError') {
            alert(
              '크롬 브라우저를 이용하면 오디오 알림 기능을 사용할 수 있습니다.',
            )
          }
        })
      }
      // alert 표시
      alert(`${payload.notification?.title}\n${payload.notification?.body}`)
    })

    return () => unsubscribe()
  }, [messaging])

  return {
    ...state,
    requestNotificationPermission,
  }
}
