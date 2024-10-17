import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
`

const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start; // 변경: 위쪽 정렬
  overflow: visible; // 변경: 내부 컴포넌트의 스크롤 허용
`

export const S = {
  PageContainer,
  Content,
}
