import type { StatusType } from './status-code.type'

export type UserType = {
  uuid: string
  userName: string
  arriveTimeStamp: number
  status: StatusType
  fcmToken: string
}
