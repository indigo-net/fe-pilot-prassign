import type { Messaging } from 'firebase/messaging'
import { getToken, onMessage } from 'firebase/messaging'
import { useCallback, useEffect, useRef, useState } from 'react'
import klaxonSound from '../assets/audio/klaxon.mp3'
import {
  NO_FCM_TOKEN,
  NO_FIREBASE_CONTEXT,
  NO_NOTIFICATION_PERMISSION,
  UNKNOWN_ERROR,
} from '../constants/error-message'
import { useFirebaseStore } from '../contexts/firebase-context'
import { isNull } from '../utils/type-guard'

type FCMStateType = {
  token: string | null
  isLoading: boolean
  error: Error | null
  message: unknown | null
}

export const useFCM = () => {
  const { messaging } = useFirebaseStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<FCMStateType>({
    token: null,
    isLoading: false,
    error: null,
    message: null,
  })

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

    audioRef.current = new Audio(klaxonSound)

    const unsubscribe = onMessage(messaging, (payload) => {
      setPartialState({ message: payload })

      // 소리 내기
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((error) => console.error('Error playing audio:', error))
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
