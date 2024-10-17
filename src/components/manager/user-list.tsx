import type { PropsWithChildren } from 'react'
import { S } from './user-list.s'

// const UserList = ({ users }: { users: UserType[] }) => {
//   const mapCodeToColor: Record<
//     StatusCodeType,
//     'violet' | 'skyBlue' | 'purple' | 'pink' | 'alert'
//   > = {
//     0: 'violet',
//     1: 'skyBlue',
//     2: 'purple',
//   }

//   return (
//     <S.ListWrapper>
//       <S.ListBase>
//         {users.map((user) => {
//           const statusLabel = mapCodeToLabel(user.status) || ''
//           const statusColor = mapCodeToColor[user.status] || 'skyBlue'
//           return (
//             <S.UserItem key={user.uuid}>
//               <Typography variant="caption">{user.userName}</Typography>
//               <Typography variant="captionBold">
//                 <HighlightText color={statusColor}>{statusLabel}</HighlightText>
//               </Typography>
//               <Checkbox disabled={user.status !== 1} />
//             </S.UserItem>
//           )
//         })}
//       </S.ListBase>
//     </S.ListWrapper>
//   )
// }
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
