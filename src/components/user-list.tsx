import type { UserType } from '../types/user'
import { S } from './user-list.s'

type UserListProps = {
  users: UserType[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <S.ListWrapper>
      <S.List>
        {users.map((user) => {
          const { uuid, userName, status } = user
          return (
            <S.User key={uuid}>
              <span>{userName}</span>
              <span>Status: {status}</span>
            </S.User>
          )
        })}
      </S.List>
    </S.ListWrapper>
  )
}
export default UserList
