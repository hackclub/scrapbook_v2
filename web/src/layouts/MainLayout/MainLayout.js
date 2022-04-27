import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
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
            <li>
              <Link to={routes.login()}>Login</Link>
            </li>
            <li>
              <Link to={routes.signup()}>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
