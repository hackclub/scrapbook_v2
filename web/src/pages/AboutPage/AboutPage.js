import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>About Scrapbook</p>
      <Link to={routes.home()}>Home</Link>
    </>
  )
}

export default AboutPage
