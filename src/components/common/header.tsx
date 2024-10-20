import { useNavigate } from 'react-router-dom'
import { S } from './header.s'
const Header = () => {
  const navigate = useNavigate()
  const isInHome = location.pathname === '/'
  const onClickHome = () => {
    navigate('/')
  }
  return (
    <S.Wrapper>
      <S.ServiceName>Prassign</S.ServiceName>
      {!isInHome && (
        <S.GoHomeButton onClick={onClickHome}>홈으로;;</S.GoHomeButton>
      )}
    </S.Wrapper>
  )
}
export default Header
