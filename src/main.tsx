import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './libs/firebase/firebase-provider.tsx'
import router from './libs/react-router-dom /router.tsx'
import GlobalStyles from './libs/styled-components/global-styles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>,
)
