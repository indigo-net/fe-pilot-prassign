import { onMessage } from 'firebase/messaging'
import { useEffect, useRef } from 'react'
import { useFirebaseStore } from '../contexts/firebase-context'

type UseFCMMessageProps = {
  fcmToken: string | null
}

export const useFCMMessage = ({ fcmToken }: UseFCMMessageProps) => {
  const { messaging } = useFirebaseStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // 토큰이 없거나 messaging이 없으면 메시지를 수신할 수 없음
    if (!fcmToken || !messaging) return

    // 오디오 객체 생성 및 로드
    audioRef.current = new Audio('/audio/klaxon.mp3')
    audioRef.current.load()

    const unsubscribe = onMessage(messaging, () => {
      const title = '[🚌셔틀버스 X 🦕인디고넷]'
      const body = '빵빵~!! 준비하세요.'

      // 브라우저 알림 표시
      new Notification(title, {
        body,
        icon: '/image/prassign-196x196.png',
        silent: false,
        vibrate: [200, 100, 200], // 진동 패턴
        tag: 'shuttle-notification', // 알림 그룹화
      } as NotificationOptions)

      // 소리 재생
      if (audioRef.current) {
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            if (error.name === 'NotAllowedError') {
              alert('오디오 재생이 허용되지 않았습니다.')
            }
          })
        }
      }
    })

    return () => {
      unsubscribe()
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [messaging, fcmToken])
}
