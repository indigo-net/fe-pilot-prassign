import { memo } from 'react'
import Input from '../common/input'
import { S } from './pin-printer.s'

type PinPrinterProps = {
  pin: string
}
const PinPrinter = memo(({ pin }: PinPrinterProps) => {
  const splitPin = pin.split('')
  return (
    <S.Container>
      {splitPin.map((split, idx) => {
        return (
          <Input
            key={idx}
            type="text"
            size="square"
            maxLength={1}
            value={split}
            isTextCenter
            disabled
          />
        )
      })}
    </S.Container>
  )
})

export default PinPrinter
