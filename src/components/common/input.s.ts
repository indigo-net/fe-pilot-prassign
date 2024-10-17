import styled, { css } from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

export const INPUT_SIZE_CSS = {
  default: css`
    width: 14rem;
  `,
  square: css`
    width: 5rem;
  `,
  big: css`
    width: 18rem;
  `,
  full: css`
    width: 100%;
  `,
} as const

type InputWrapperProps = {
  $size: keyof typeof INPUT_SIZE_CSS
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  height: 5rem;
  background-color: ${COLOR.white};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  ${({ $size }) => INPUT_SIZE_CSS[$size]};
`

type InputProps = {
  $isTextCenter: boolean
}
const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  font-size: ${FONT_SIZE.regular};
  font-weight: ${FONT_WEIGHT.medium};
  color: ${COLOR.black};
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  text-align: ${({ $isTextCenter }) => ($isTextCenter ? 'center' : 'start')};
  &::placeholder {
    color: ${COLOR.grayscale[500]};
  }
`

export const S = {
  InputWrapper,
  Input,
}
