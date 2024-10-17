import type { ButtonHTMLAttributes } from 'react'
import { useState } from 'react'
import { S } from './checkbox.s'

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onHandleCheckbox?: (isChecked: boolean) => void
  initialChecked?: boolean
}

const Checkbox = ({
  onHandleCheckbox,
  initialChecked = false,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked)

  const onClick = () => {
    setIsChecked((prevState) => {
      const nextState = !prevState
      onHandleCheckbox?.(nextState)
      return nextState
    })
  }

  return (
    <S.BoxWrapper
      type="button"
      aria-checked={isChecked}
      onClick={onClick}
      $isChecked={isChecked}
      {...props}
    >
      {isChecked && <span aria-hidden="true">✔️</span>}
    </S.BoxWrapper>
  )
}

export default Checkbox
