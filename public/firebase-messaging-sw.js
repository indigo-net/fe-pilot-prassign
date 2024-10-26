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

messaging.onBackgroundMessage(() => {
  const notificationTitle = '[🚌셔틀버스 X 🦕인디고넷]'

  const notificationOptions = {
    body: '빵빵~!! 준비하세요.',
    icon: 'https://github.com/indigo-net/fe-pilot-prassign/blob/main/public/image/apple-touch-icon.png?raw=true',
    sound:
      'https://github.com/indigo-net/fe-pilot-prassign/raw/main/public/audio/klaxon.mp3',
    vibrate: [200, 100, 200],
    silent: false,
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  )
})
