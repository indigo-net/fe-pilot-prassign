import { useRef, useState } from 'react'
import Input from '../common/input'
import { S } from './pin-input.s'

const PinInput = () => {
  const [pin, setPin] = useState(['', '', '', ''])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)

      if (value !== '' && index < 3) {
        inputs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && pin[idx] === '' && idx > 0)
      inputs.current[idx - 1]?.focus()
  }

  return (
    <S.Container>
      {pin.map((digit, idx) => (
        <Input
          key={idx}
          ref={(el) => (inputs.current[idx] = el)}
          type="text"
          size="square"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
        />
      ))}
    </S.Container>
  )
}
PinInput.displayName = 'PinInput'

export default PinInput
