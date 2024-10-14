import styled from 'styled-components'

const ListWrapper = styled.div`
  height: 50dvh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  border-radius: 10px;
`

const List = styled.ul`
  width: 250px;
  height: fit-content; // 고정 높이 설정
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const User = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  border-bottom: 1px solid gray;
  padding: 0 10px;
`

export const S = {
  ListWrapper,
  List,
  User,
}
