import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/Post/PostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Scrapbook" description="Scrapbook" />

      <p>Welcome to Scrapbook!</p>

      <PostsCell />
    </>
  )
}

export default HomePage
