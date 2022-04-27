import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Scrapbook" description="Scrapbook" />

      <p>Welcome to Scrapbook!</p>
    </>
  )
}

export default HomePage
