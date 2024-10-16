import styled from 'styled-components'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${FONT_SIZE.projectTitle};
  font-weight: ${FONT_WEIGHT.bold};
`

export const S = {
  TitleContainer,
}
