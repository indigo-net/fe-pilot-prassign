import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Manager from '../../pages/manager'
import NotFound from '../../pages/not-found'
import User from '../../pages/user'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/manager',
    element: <Manager />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
