import { useContext } from 'react'
import { FirebaseContext } from './firebase-provider'

export const useFirebase = () => {
  const context = useContext(FirebaseContext)
  if (!context)
    throw new Error('useFirebase must be used within a FirebaseProvider')

  return { messaging: context.messaging }
}
