import { S } from './bottom-navi.s'

type ItemType = {
  item: string
  onClick: VoidFunction
}

type BottomNaviProps = {
  items: ItemType[]
}

const BottomNavi = ({ items }: BottomNaviProps) => {
  return (
    <S.Wrapper>
      {items.map(({ item, onClick }) => (
        <S.ItemWrapper>
          <button {...{ onClick }}>{item}</button>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  )
}

export default BottomNavi
