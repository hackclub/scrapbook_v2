import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router'
import Nav from '../../components/Nav'

const MainLayout = ({ children }) => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <header>
      <Nav />
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
