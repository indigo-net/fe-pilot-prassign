import { useNavigate } from 'react-router-dom'
import Button from '../components/common/button'
import CopyrightNotice from '../components/home/copyright-notice'
import ProjectDescription from '../components/home/project-description'
import ProjectTitle from '../components/home/project-title'
import { useNotification } from '../hooks/use-notification'
import { S } from './home.s'

const Home = () => {
  const navigate = useNavigate()

  // 알림 권한 요청
  const { retryPermission } = useNotification()

  const onClickManager = () => navigate('/manager')
  const onClickUser = () => navigate('/user/authentication')

  return (
    <S.PageContainer>
      <S.ProjectSignatureContainer>
        <ProjectTitle />
        <ProjectDescription />
      </S.ProjectSignatureContainer>
      <Button onClick={async () => await retryPermission()} size="fit">
        알림권한 요청
      </Button>
      <S.ButtonContainer>
        <Button onClick={onClickUser}>일반부원</Button>
        <Button variant="secondary" onClick={onClickManager}>
          운영진
        </Button>
      </S.ButtonContainer>
      <CopyrightNotice />
    </S.PageContainer>
  )
}
export default Home
