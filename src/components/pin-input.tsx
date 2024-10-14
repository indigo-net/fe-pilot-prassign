import { useRef, useState } from 'react'
import { S } from './pin-input.s'

const PinInput = () => {
  const [pin, setPin] = useState(['', '', '', ''])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)

      // Move focus to next input
      if (value !== '' && index < 3) {
        inputs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  return (
    <S.Container>
      {pin.map((digit, index) => (
        <S.PinDigit
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </S.Container>
  )
}
export default PinInput
