import styled, { css } from 'styled-components'
import { COLOR } from '../../styles/color'
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
  caption: css`
    font-size: ${FONT_SIZE.tiny};
    font-weight: ${FONT_WEIGHT.extraLight};
    color: ${COLOR.grayscale[400]};
  `,
  captionBold: css`
    font-size: ${FONT_SIZE.tiny};
    font-weight: ${FONT_WEIGHT.regular};
    color: ${COLOR.grayscale[500]};
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
