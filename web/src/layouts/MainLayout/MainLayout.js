import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header>
        <Link to={routes.home()}>
          <h1>Scrapbook</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.newPost()}>Share</Link>
            </li>
            { (isAuthenticated) ? (
              <li>
                <Link>Log Out</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to={routes.login()}>Login</Link>
                </li>
                <li>
                  <Link to={routes.signup()}>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
