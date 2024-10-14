import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: 200px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid black;
`

const ItemWrapper = styled.div`
  width: 80px;
  aspect-ratio: 1/1;

  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const S = {
  Wrapper,
  ItemWrapper,
}
