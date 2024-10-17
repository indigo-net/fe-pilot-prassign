import type { PropsWithChildren } from 'react'
import { S } from './user-list.s'

const ListArea = ({ children }: PropsWithChildren) => {
  return (
    <S.ListWrapper>
      <S.ListBase>{children}</S.ListBase>
    </S.ListWrapper>
  )
}
const UserItem = ({ children }: PropsWithChildren) => {
  return <S.UserItem>{children}</S.UserItem>
}

const UserList = { ListArea, UserItem }
export default UserList
