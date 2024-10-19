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
    refetchInterval: intervalMs, // 20초마다 자동 재요청
    refetchIntervalInBackground: false, // 백그라운드에서 재요청 하지 않음
  })
