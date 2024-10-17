import styled from 'styled-components'
import { COLOR } from '../../styles/color'

const ListWrapper = styled.div`
  width: 50%;
  height: 50vh;
  min-width: 200px;
  min-height: 150px;
  border-radius: 3px;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
`

const ListBase = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  height: fit-content;
`

const UserItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 10px;
  width: 100%;
  height: 5.5rem;
  padding: 0 1rem;
  border-bottom: 0.5px solid ${COLOR.grayscale[500]};
`

export const S = {
  ListWrapper,
  ListBase,
  UserItem,
}
