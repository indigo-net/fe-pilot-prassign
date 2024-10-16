import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 20px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

const PageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const S = {
  PageContainer,
  PageContentContainer,
  UserInfoContainer,
}
