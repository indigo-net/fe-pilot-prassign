import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from '../../components/common/header'
import Home from '../../pages/home'
import Manager from '../../pages/manager'
import NotFound from '../../pages/not-found'
import User from '../../pages/user'
import UserAuthentication from '../../pages/user-authentication'
import ProtectUserAuthenticationPageRoute from './protect-user-authentication-page-route'
import ProtectUserPageRoute from './protect-user-page-route'

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
        element: <ProtectUserPageRoute />,
        children: [{ index: true, element: <User /> }],
      },
      {
        path: '/user/authentication',
        element: <ProtectUserAuthenticationPageRoute />,
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
