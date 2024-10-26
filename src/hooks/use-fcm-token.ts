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

  const requestToken = useCallback(async (): Promise<string> => {
    setIsLoading(true)
    setError(null)

    try {
      if (isNull(messaging)) throw new Error(NO_FIREBASE_CONTEXT)
      const newToken = await getFCMToken(messaging)
      setToken(newToken)
      setIsLoading(false)
      return newToken
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : NO_FCM_TOKEN
      setError(new Error(errorMessage))
      setIsLoading(false)
      throw error
    }
  }, [messaging, getFCMToken])

  return {
    token,
    isLoading,
    error,
    requestToken,
  }
}
