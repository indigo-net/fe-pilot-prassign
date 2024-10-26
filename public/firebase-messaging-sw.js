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
    icon: '/image/apple-touch-icon.png',
    sound: '/audio/klaxon.mp3',
    vibrate: [200, 100, 200],
    silent: false,
  }

  const audio = new Audio('/audio/klaxon.mp3')
  audio.play().catch((error) => console.log('소리 재생 실패:', error))

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  )
})
