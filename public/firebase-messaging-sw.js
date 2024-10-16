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
  measurementId: 'G-1234567890',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload)
  // 여기에서 알림을 표시하는 로직을 구현합니다
})
