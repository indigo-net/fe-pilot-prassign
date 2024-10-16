import { type HTMLAttributes, type PropsWithChildren } from 'react'
import type { TYPOGRAPHY_VARIANT_CSS } from './typography.s'
import { S } from './typography.s'

type TypographyProps = HTMLAttributes<HTMLParagraphElement> &
  PropsWithChildren<{
    variant?: keyof typeof TYPOGRAPHY_VARIANT_CSS
  }>

const Typography = ({ variant = 'default', children }: TypographyProps) => {
  return <S.Paragraph $variant={variant}>{children}</S.Paragraph>
}

export default Typography
