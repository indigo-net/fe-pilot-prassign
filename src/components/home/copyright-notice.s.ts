import styled from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

const NoticeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const NoticeText = styled.p`
  color: ${COLOR.white};
  font-size: ${FONT_SIZE.tiny};
  font-weight: ${FONT_WEIGHT.light};
`

export const S = { NoticeWrapper, NoticeText }
