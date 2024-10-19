import styled from 'styled-components'
import { COLOR } from '../../styles/color'

const AreaWrapper = styled.div`
  width: 50%;
  height: 50vh;
  min-width: 200px;
  min-height: 150px;
  border-radius: 3px;
  background-color: ${COLOR.grayscale[900]};
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const S = {
  AreaWrapper,
}
