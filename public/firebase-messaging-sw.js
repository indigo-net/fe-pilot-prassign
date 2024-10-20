importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js',
)

firebase.initializeApp({
  apiKey: 'AIzaSyD12345678901234567890',
  authDomain: 'prassign-92b35.firebaseapp.com',
  projectId: 'prassign-92b35',
  storageBucket: 'prassign-92b35.appspot.com',
  messagingSenderId: '123456789012',
  appId: '1:123456789012:web:12345678901234567890',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    sound: '/audio/klaxon.mp3', // 소리 파일 경로 추가
    vibrate: [200, 100, 200], // 진동 패턴 추가 (선택사항)
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
