import { useCallback, useState } from 'react'
import { LOCAL_KEY } from '../constants/web-storage-key'
import type { StatusType } from '../types/status-code.type'
import type { UserType } from '../types/user'
import { isNull } from '../utils/type-guard'
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '../utils/web-storage-manager'

export const useUser = () => {
  const [user, setUser] = useState<UserType | null>(() =>
    getItemFromLocalStorage<UserType>(LOCAL_KEY.USER),
  )

  const setUserStatus = useCallback(
    (newStatus: StatusType) => {
      if (isNull(user)) return

      setItemToLocalStorage<UserType>(LOCAL_KEY.USER, {
        ...user,
        status: newStatus,
      })

      setUser((prevUser) => {
        if (isNull(prevUser)) return null
        return {
          ...prevUser,
          status: newStatus,
        }
      })
    },
    [user],
  )

  return { user, setUserStatus }
}
