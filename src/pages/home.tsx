import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  const navigate = useNavigate()

  const onClickManager = () => navigate('/manager')
  const onClickMember = () => navigate('/member')

  return (
    <S.PageContainer>
      <h1>Home</h1>
      <S.ButtonContainer>
        <button onClick={onClickManager}>운영진</button>
        <button onClick={onClickMember}>회원</button>
      </S.ButtonContainer>
    </S.PageContainer>
  )
}
export default Home

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 10px;
`

const S = {
  PageContainer,
  ButtonContainer,
}
