import { useNavigate } from 'react-router-dom'
import Button from '../components/common/button'
import { useFCM } from '../hooks/use-fcm'
import { S } from './home.s'

const Home = () => {
  const navigate = useNavigate()

  const { token, message, requestNotificationPermission } = useFCM()
  console.log(token)
  console.log(message)

  return (
    <S.PageContainer>
      <Button onClick={requestNotificationPermission}>메시지</Button>
    </S.PageContainer>
  )
}
export default Home
