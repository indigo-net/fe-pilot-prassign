import styled, { css } from 'styled-components'
import { FONT_SIZE } from '../../styles/font-size'
import { FONT_WEIGHT } from '../../styles/font-weight'

export const TYPOGRAPHY_VARIANT_CSS = {
  default: css`
    font-size: ${FONT_SIZE.regular};
    font-weight: ${FONT_WEIGHT.regular};
  `,
  bigInfo: css`
    font-size: ${FONT_SIZE.big};
    font-weight: ${FONT_WEIGHT.light};
  `,
  pageTitle: css`
    font-size: ${FONT_SIZE.big};
    font-weight: ${FONT_WEIGHT.regular};
  `,
} as const

type ParagraphProps = {
  $variant: keyof typeof TYPOGRAPHY_VARIANT_CSS
}

const Paragraph = styled.p<ParagraphProps>`
  ${({ $variant }) => TYPOGRAPHY_VARIANT_CSS[$variant]}
`

export const S = {
  Paragraph,
}
