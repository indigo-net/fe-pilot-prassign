import { useNavigate } from 'react-router-dom'
import PinInput from '../components/pin-input'
import { S } from './user-authentication.s'

const UserAuthentication = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem('authKey', 'shuttle-bus')
    navigate('/user')
  }

  return (
    <S.Container>
      <S.Title>사용자 인증</S.Title>
      <S.InputContainer>
        <S.Label>사용자 이름 (최대 5자)</S.Label>
        <S.Input type="text" maxLength={5} placeholder="이름 입력" />
      </S.InputContainer>
      <S.InputContainer>
        <S.Label>PIN 번호 입력</S.Label>
        <PinInput />
      </S.InputContainer>
      <button onClick={handleSubmit}>제출</button>
    </S.Container>
  )
}

export default UserAuthentication
