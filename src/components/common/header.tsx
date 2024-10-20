import { useNavigate } from 'react-router-dom'
import { S } from './header.s'
import Typography from './typography'
const Header = () => {
  const navigate = useNavigate()
  const isInHome = location.pathname === '/'
  const onClickHome = () => {
    navigate('/')
  }
  return (
    <S.Wrapper>
      <S.ServiceName>Parssign</S.ServiceName>
      {!isInHome && (
        <Typography variant="captionBold" onClick={onClickHome}>
          홈으로;;
        </Typography>
      )}
    </S.Wrapper>
  )
}
export default Header
