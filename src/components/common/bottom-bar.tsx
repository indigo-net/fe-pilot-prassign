import type { HTMLAttributes } from 'react'
import { Children, isValidElement, type PropsWithChildren } from 'react'
import type { NAVIGATION_ITEM_COLOR } from './bottom-bar.s'
import { S } from './bottom-bar.s'

type NavigationListProps = PropsWithChildren

const NavigationList = ({ children }: NavigationListProps) => {
  const childrenArray = Children.toArray(children)
  const isNavigationItemArray = childrenArray.every(
    (child) => isValidElement(child) && child.type === NavigationItem,
  )
  if (!isNavigationItemArray)
    throw new Error(
      'NavigationList는 오직 NavigationItem만을 자식으로 가져야 합니다.',
    )
  return <S.ListContainer>{childrenArray}</S.ListContainer>
}

type NavigationItemProps = HTMLAttributes<HTMLButtonElement> & {
  color?: keyof typeof NAVIGATION_ITEM_COLOR
  children: string
}

const NavigationItem = ({
  color = 'skyBlue',
  children,
  ...props
}: NavigationItemProps) => {
  return (
    <S.ItemWrapper $color={color} {...props}>
      <S.ItemText>{children}</S.ItemText>
    </S.ItemWrapper>
  )
}

const BottomBar = {
  NavigationList,
  NavigationItem,
}

export default BottomBar
