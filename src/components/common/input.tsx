import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import type { INPUT_SIZE_CSS } from './input.s'
import { S } from './input.s'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: keyof typeof INPUT_SIZE_CSS
  isTextCenter?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'default', isTextCenter = false, ...props }, ref) => {
    return (
      <S.InputWrapper $size={size}>
        <S.Input ref={ref} $isTextCenter={isTextCenter} {...props} />
      </S.InputWrapper>
    )
  },
)
Input.displayName = 'Input'
export default Input
