import type { ButtonHTMLAttributes } from 'react'
import { useEffect, useState } from 'react'
import { isUndefined } from '../../utils/type-guard'
import { S } from './checkbox.s'

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onHandleCheckbox?: (isChecked: boolean) => void
  initialChecked?: boolean
  checked?: boolean
}

const Checkbox = ({
  onHandleCheckbox,
  initialChecked = false,
  checked,
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

  useEffect(() => {
    if (isUndefined(checked)) return
    setIsChecked(checked)
  }, [checked])

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
