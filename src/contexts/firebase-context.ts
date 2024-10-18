import type { getMessaging } from 'firebase/messaging'
import { createContext, useContext } from 'react'

type FirebaseContextType = {
  messaging: ReturnType<typeof getMessaging> | null
}
const FirebaseContext = createContext<FirebaseContextType>({
  messaging: null,
})
const useFirebaseStore = () => useContext(FirebaseContext)

export { FirebaseContext, useFirebaseStore }
