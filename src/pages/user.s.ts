import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`
const StatusText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: auto;
`

export const S = {
  Container,
  StatusText,
}
