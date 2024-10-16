import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import { createContext, PropsWithChildren, useEffect } from 'react'
import { firebaseConfig } from './firebase-config'

type FirebaseContextType = {
  messaging: ReturnType<typeof getMessaging>
}
export const FirebaseContext = createContext<FirebaseContextType | null>(null)

type FirebaseProviderProps = PropsWithChildren
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
export default FirebaseProvider
