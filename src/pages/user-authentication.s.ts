import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  width: 100%;
`

export const S = {
  Container,
  Title,
  InputContainer,
  Label,
  Input,
}
