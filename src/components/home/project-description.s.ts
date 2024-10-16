import styled from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

const DescriptionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.p`
  text-align: center;
  font-size: ${FONT_SIZE.big};
  font-weight: ${FONT_WEIGHT.extraLight};
  color: ${COLOR.grayscale[700]};
`

export const S = { DescriptionWrapper, Description }
