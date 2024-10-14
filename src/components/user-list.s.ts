import styled from 'styled-components'

const List = styled.ul`
  width: 250px;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;
`

const User = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const S = {
  List,
  User,
}
