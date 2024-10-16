import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import type { INPUT_SIZE_CSS } from './input.s'
import { S } from './input.s'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: keyof typeof INPUT_SIZE_CSS
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'default', ...props }, ref) => {
    return (
      <S.InputWrapper $size={size}>
        <S.Input ref={ref} {...props} />
      </S.InputWrapper>
    )
  },
)
Input.displayName = 'Input'
export default Input
