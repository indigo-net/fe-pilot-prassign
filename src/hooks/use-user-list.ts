import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../constants/tanstack-key'
import { axiosInstance } from '../libs/axios/axios-instance'
import type { UserType } from '../types/user'

export const useUserList = (intervalMs = 1000 * 20) =>
  useQuery<UserType[]>({
    queryKey: [QUERY_KEYS.USER_LIST],
    queryFn: async () => {
      const response = await axiosInstance().get('/prassign/users', {
        params: { action: 'list' },
      })
      return response.data.list
    },
    refetchInterval: intervalMs,
    staleTime: 1000 * 10,
    placeholderData: (previousData) => previousData,
  })
