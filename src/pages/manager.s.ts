import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // 변경
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100vh; // 전체 뷰포트 높이 사용
  padding: 20px; // 상하 여백 추가
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
  Container,
  Content,
}
