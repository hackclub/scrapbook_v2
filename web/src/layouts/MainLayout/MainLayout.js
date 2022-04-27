import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Scrapbook</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
