import styled from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'

type ButtonWrapperProps = {
  $isChecked: boolean
}
const BoxWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 8px;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  color: ${COLOR.black};
  font-size: ${FONT_SIZE.tiny};
  background-color: ${({ $isChecked }) =>
    $isChecked ? COLOR.skyBlue.light : COLOR.grayscale[800]};
  &:disabled {
    background-color: ${COLOR.grayscale[500]};
  }
  &:active {
    background-color: ${COLOR.grayscale[500]};
  }
`
export const S = {
  BoxWrapper,
}
