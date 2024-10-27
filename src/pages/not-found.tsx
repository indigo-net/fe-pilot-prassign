import { useNavigate } from 'react-router-dom'
import Button from '../components/common/button'
import Typography from '../components/common/typography'
import { S } from './not-found.s'

const NotFound = () => {
  const navigate = useNavigate()
  const onClickHome = () => {
    navigate('/')
  }
  return (
    <S.PageContainer>
      <Typography>404: Not Found</Typography>
      <Button onClick={onClickHome}>홈으로</Button>
    </S.PageContainer>
  )
}
export default NotFound
