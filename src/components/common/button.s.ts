import styled, { css } from 'styled-components'
import { COLOR } from '../../styles/color'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

export const SIZE_CSS = {
  default: css`
    width: 14rem;
  `,
  big: css`
    width: 18rem;
  `,
  fit: css`
    width: fit-content;
    max-width: 100%;
  `,
  full: css`
    width: 100%;
  `,
}
export const VARIANT_CSS = {
  primary: css`
    background-color: ${COLOR.white};
    color: ${COLOR.black};

    &:active {
      background-color: ${COLOR.grayscale[600]};
    }
  `,
  secondary: css`
    background-color: ${COLOR.grayscale[300]};
    color: ${COLOR.white};
    &:active {
      background-color: ${COLOR.grayscale[100]};
      color: ${COLOR.grayscale[700]};
    }
  `,
}

type ButtonWrapperProps = {
  $variant: keyof typeof VARIANT_CSS
  $size: keyof typeof SIZE_CSS
}
const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin-bottom: 8px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: transform 50ms ease-in-out;
  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }
  ${({ $variant }) => VARIANT_CSS[$variant]}
  ${({ $size }) => SIZE_CSS[$size]}
`
const ButtonText = styled.span`
  font-size: ${FONT_SIZE.regular};
  font-weight: ${FONT_WEIGHT.regular};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const S = {
  ButtonWrapper,
  ButtonText,
}
