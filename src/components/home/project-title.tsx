import HighlightText from '../common/highlight-text'
import { S } from './project-title.s'

const ProjectTitle = () => {
  return (
    <S.TitleContainer>
      <HighlightText color="violet">Pr</HighlightText>
      <HighlightText color="skyBlue">as</HighlightText>
      <HighlightText color="purple">si</HighlightText>
      <HighlightText color="pink">gn</HighlightText>
    </S.TitleContainer>
  )
}

export default ProjectTitle
