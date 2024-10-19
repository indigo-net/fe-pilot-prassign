import type { ReactNode } from 'react'
import { S } from './just-area.s'

type JustAreaProps = {
  children: ReactNode
}
const JustArea = ({ children }: JustAreaProps) => {
  return <S.AreaWrapper>{children}</S.AreaWrapper>
}
export default JustArea
