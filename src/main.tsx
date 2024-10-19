import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </FirebaseProvider>
    </QueryClientProvider>
  </StrictMode>,
)
