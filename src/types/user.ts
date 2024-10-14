export type StatusType = 0 | 1 | 2

export type UserType = {
  uuid: string
  userName: string
  arriveTimeStamp: number
  status: StatusType
  fcmToken: string
}
