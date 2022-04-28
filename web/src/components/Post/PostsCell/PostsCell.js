import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      authorId
      createdAt
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div>No posts yet.</div>
  )
}

export const Failure = ({ error }) => (
  <div>{error.message}</div>
)

export const Success = ({ posts }) => {
  return <Posts posts={posts}/>
}
