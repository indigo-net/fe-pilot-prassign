import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Manager from '../../pages/manager'
import Member from '../../pages/member'
import NotFound from '../../pages/not-found'

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
    path: '/member',
    element: <Member />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
