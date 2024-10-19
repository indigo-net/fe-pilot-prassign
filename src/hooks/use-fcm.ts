import type { Messaging } from 'firebase/messaging'
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

type FCMStateType = {
  token: string | null
  isLoading: boolean
  error: Error | null
  message: unknown | null
}

export const useFCM = () => {
  const { messaging } = useFirebaseStore()
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

    const unsubscribe = onMessage(messaging, (payload) => {
      setPartialState({ message: payload })
    })

    return () => unsubscribe()
  }, [messaging])

  return {
    ...state,
    requestNotificationPermission,
  }
}
