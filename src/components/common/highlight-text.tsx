import type { HTMLAttributes } from 'react'
import type { HIGHLIGHT_COLOR_CSS } from './highlight-text.s'
import { S } from './highlight-text.s'

type HighlightTextProps = HTMLAttributes<HTMLSpanElement> & {
  color: keyof typeof HIGHLIGHT_COLOR_CSS
  isUnderline?: boolean
  children: string
}

const HighlightText = ({
  color,
  isUnderline = false,
  children,
  ...rest
}: HighlightTextProps) => {
  return (
    <S.Mark $color={color} $isUnderline={isUnderline} {...rest}>
      {children}
    </S.Mark>
  )
}
export default HighlightText
