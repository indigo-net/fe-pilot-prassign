import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Manager from '../../pages/manager'
import NotFound from '../../pages/not-found'
import User from '../../pages/user'
import UserAuthentication from '../../pages/user-authentication'
import ProtectedRoute from './protected-route'
import UnauthenticatedRoute from './unauthenticated-route'

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
    element: <ProtectedRoute />,
    children: [{ index: true, element: <User /> }],
  },
  {
    path: '/user/authentication',
    element: <UnauthenticatedRoute />,
    children: [{ index: true, element: <UserAuthentication /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
