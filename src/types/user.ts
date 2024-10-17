import type { StatusCodeType } from './status-code.type'

export type UserType = {
  uuid: string
  userName: string
  arriveTimeStamp: number
  status: StatusCodeType
  fcmToken: string
}
