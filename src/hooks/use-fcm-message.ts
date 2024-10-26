import { onMessage } from 'firebase/messaging'
import { useEffect, useRef, useState } from 'react'
import { useFirebaseStore } from '../contexts/firebase-context'

type UseFCMMessageProps = {
  fcmToken: string | null
}

export const useFCMMessage = ({ fcmToken }: UseFCMMessageProps) => {
  const { messaging } = useFirebaseStore()
  const [message, setMessage] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // 토큰이 없거나 messaging이 없으면 메시지를 수신할 수 없음
    if (!fcmToken || !messaging) return

    // 오디오 객체 생성 및 로드
    audioRef.current = new Audio('/audio/klaxon.mp3')
    audioRef.current.load()

    const unsubscribe = onMessage(messaging, () => {
      const newMessage = '[🚌셔틀버스 X 🦕인디고넷]\n빵빵~!! 준비하세요.'
      setMessage(newMessage)

      // 소리 재생
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          if (error.name === 'NotAllowedError') {
            alert(
              '크롬 브라우저를 이용하면 오디오 알림 기능을 사용할 수 있습니다.',
            )
          }
        })
      }
      // alert 표시
      alert(`${newMessage}`)
    })

    return () => unsubscribe()
  }, [messaging, fcmToken]) // token을 의존성 배열에 추가

  return {
    message,
  }
}
