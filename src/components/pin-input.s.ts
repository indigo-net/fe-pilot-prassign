import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
`

const PinDigit = styled.input`
  width: 50px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const S = {
  Container,
  PinDigit,
}
