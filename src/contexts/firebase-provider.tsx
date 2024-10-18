import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import type { ReactNode } from 'react'
import { createContext, useEffect } from 'react'
import { firebaseConfig } from '../libs/firebase/firebase-config'

type FirebaseContextType = {
  messaging: ReturnType<typeof getMessaging>
}
const FirebaseContext = createContext<FirebaseContextType | null>(null)

type FirebaseProviderProps = {
  children: ReactNode
}
const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const app = initializeApp(firebaseConfig)
  const messaging = getMessaging(app)

  useEffect(() => {
    getAnalytics(app)
  }, [])

  return (
    <FirebaseContext.Provider value={{ messaging }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContext }
export default FirebaseProvider
