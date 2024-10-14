import type { UserType } from '../types/user'
import { S } from './user-list.s'

type UserListProps = {
  users: UserType[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <S.List>
      {users.map((user) => {
        const uuid = user.uuid
        const userName = user.userName
        const status = user.status

        return <S.User key={uuid}>{userName}</S.User>
      })}
    </S.List>
  )
}
export default UserList
