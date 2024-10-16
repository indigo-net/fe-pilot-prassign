import { useNavigate } from 'react-router-dom'
import Button from '../components/common/button'
import CopyrightNotice from '../components/home/copyright-notice'
import ProjectDescription from '../components/home/project-description'
import ProjectTitle from '../components/home/project-title'
import { S } from './home.s'

const Home = () => {
  const navigate = useNavigate()

  const onClickManager = () => navigate('/manager')
  const onClickUser = () => navigate('/user')

  return (
    <S.PageContainer>
      <S.ProjectSignatureContainer>
        <ProjectTitle />
        <ProjectDescription />
      </S.ProjectSignatureContainer>
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
