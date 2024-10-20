import styled from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

const Wrapper = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  border-bottom: 0.5px solid ${COLOR.grayscale[600]};
`
const ServiceName = styled.p`
  color: ${COLOR.white};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.small};
`

export const S = {
  Wrapper,
  ServiceName,
}
