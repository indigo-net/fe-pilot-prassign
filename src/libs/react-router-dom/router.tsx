import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from '../../components/common/header'
import Home from '../../pages/home'
import Manager from '../../pages/manager'
import NotFound from '../../pages/not-found'
import User from '../../pages/user'
import UserAuthentication from '../../pages/user-authentication'
import ProtectedRoute from './protected-route'
import UnauthenticatedRoute from './unauthenticated-route'

// Layout 컴포넌트 추가 (홈 페이지 제외)
const LayoutWithHeader = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <LayoutWithHeader />,
    children: [
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
    ],
  },
])

export default router
