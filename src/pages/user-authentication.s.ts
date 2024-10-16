import styled from 'styled-components'
import { FONT_SIZE } from '../styles/font-size'
import { FONT_WEIGHT } from '../styles/font-weight'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const PageTitle = styled.h1`
  font-size: ${FONT_SIZE.big};
  font-weight: ${FONT_WEIGHT.regular};
`

const InputLabel = styled.label`
  font-size: ${FONT_SIZE.medium};
  font-weight: ${FONT_WEIGHT.extraLight};
`
const InputContainer = styled.div`
  width: 100%;
  max-width: 320px;
  min-width: 260px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 0 10px;
`
const ButtonWrapper = styled.div`
  width: 320px;
  min-width: 260px;
  height: fit-content;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 10px;
`

export const S = {
  PageContainer,
  PageTitle,
  InputLabel,
  InputContainer,
  ButtonWrapper,
}
