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
  measurementId: 'G-B09L6P4H6J',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(() => {
  const notificationTitle = '[🚌셔틀버스 X 🦕인디고넷]'

  const notificationOptions = {
    body: '빵빵~!! 준비하세요.',
    icon: '/image/prassign-196x196.png', // 알림 아이콘 경로 수정
    sound: 'default',
    vibrate: [200, 100, 200],
    silent: false,
  }

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  )
})

// 캐시할 파일들
const CACHE_NAME = 'prassign-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/image/prassign.svg',
  '/image/prassign-196x196.png',
]

// 설치 시 캐시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  )
})
