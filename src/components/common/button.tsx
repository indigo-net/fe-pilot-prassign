import type { HTMLAttributes } from 'react'
import type { VARIANT_CSS } from './button.s'
import { S } from './button.s'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANT_CSS
  children: string
}
const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <S.ButtonWrapper $variant={variant} {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonWrapper>
  )
}

export default Button
