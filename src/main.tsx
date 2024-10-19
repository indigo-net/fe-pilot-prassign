import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './contexts/firebase-provider.tsx'
import router from './libs/react-router-dom/router.tsx'
import GlobalStyles from './libs/styled-components/global-styles.tsx'

// Service Worker 등록
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js').catch(() => {})
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>,
)
