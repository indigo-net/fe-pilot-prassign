import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import Button from '../components/common/button'
import Input from '../components/common/input'
import PinInput from '../components/user-authentication/pin-input'
import { useFCM } from '../hooks/use-fcm'
import { axiosInstance } from '../libs/axios/axios-instance'
import { S } from './user-authentication.s'

const UserAuthentication = () => {
  const navigate = useNavigate()
  const { requestNotificationPermission } = useFCM()
  const userNameRef = useRef<HTMLInputElement>(null)
  const handleSubmit = async () => {
    if (!userNameRef.current?.value) {
      alert('사용자 이름을 입력해주세요.')
      return
    }

    try {
      const fcmToken = await requestNotificationPermission()

      const action = 'regist'
      const uuid = v4()
      const userName = userNameRef.current?.value
      const arriveTimeStamp = Date.now()
      const status = 'REST'

      await axiosInstance().post('/prassign/users', {
        action,
        uuid,
        userName,
        arriveTimeStamp,
        status,
        fcmToken,
      })

      localStorage.setItem('uuid', uuid)
      localStorage.setItem('userName', userName)
      localStorage.setItem('authKey', 'shuttle-bus')
      navigate('/user')
    } catch (err) {
      console.error('에러 발생:', err)
    }
  }

  return (
    <S.PageContainer>
      <S.PageTitle>회원 인증</S.PageTitle>
      <S.InputContainer>
        <S.InputLabel>사용자 이름 (최대 5자)</S.InputLabel>
        <Input size="full" placeholder="이름 입력" ref={userNameRef} />
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>PIN 번호 입력</S.InputLabel>
        <PinInput />
      </S.InputContainer>
      <S.ButtonWrapper>
        <Button onClick={handleSubmit}>제출</Button>
      </S.ButtonWrapper>
    </S.PageContainer>
  )
}

export default UserAuthentication
