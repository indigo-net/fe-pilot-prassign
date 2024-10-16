import styled, { css } from 'styled-components'
import { COLOR } from '../../styles/color'

const UNDERLINE_CSS = {
  true: css`
    text-decoration: underline;
  `,
  false: css`
    text-decoration: none;
  `,
} as const
export const HIGHLIGHT_COLOR_CSS = {
  skyBlue: css`
    color: ${COLOR.skyBlue.base};
  `,
  violet: css`
    color: ${COLOR.violet.base};
  `,
  purple: css`
    color: ${COLOR.purple.base};
  `,
  pink: css`
    color: ${COLOR.pink.base};
  `,
  alert: css`
    color: ${COLOR.alert.base};
  `,
} as const

type MarkProps = {
  $color: keyof typeof HIGHLIGHT_COLOR_CSS
  $isUnderline: boolean
}
const Mark = styled.mark<MarkProps>`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  font-size: inherit;
  font-weight: inherit;
  ${({ $color }) => HIGHLIGHT_COLOR_CSS[$color]};
  ${({ $isUnderline }) => UNDERLINE_CSS[$isUnderline ? 'true' : 'false']};
`

export const S = { Mark }
