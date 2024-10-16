import type { HTMLAttributes } from 'react'
import type { BUTTON_SIZE_CSS, BUTTON_VARIANT_CSS } from './button.s'
import { S } from './button.s'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof BUTTON_VARIANT_CSS
  size?: keyof typeof BUTTON_SIZE_CSS
  children: string
}
const Button = ({
  variant = 'primary',
  size = 'default',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonWrapper $variant={variant} $size={size} {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.ButtonWrapper>
  )
}

export default Button
