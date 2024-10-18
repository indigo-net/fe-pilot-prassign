import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { firebaseConfig } from '../libs/firebase/firebase-config'
import { FirebaseContext } from './firebase-context'

type FirebaseProviderProps = {
  children: ReactNode
}
const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [messaging, setMessaging] = useState<ReturnType<
    typeof getMessaging
  > | null>(null)

  useEffect(() => {
    const app = initializeApp(firebaseConfig)
    setMessaging(getMessaging(app))
    getAnalytics(app)
  }, [])

  return (
    <FirebaseContext.Provider value={{ messaging }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
