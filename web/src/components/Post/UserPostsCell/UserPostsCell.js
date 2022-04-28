import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query FindUserPosts($username: String!) {
    user(username: $username) {
      posts {
        id
        authorId
        createdAt
        body
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const isEmpty = (data, { isDataEmpty }) =>
  isDataEmpty(data) || data.user.posts.length == 0

export const Empty = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <p>No posts yet.</p>
      { isAuthenticated && (
        <Link to={routes.newPost()}>
          Create one?
        </Link>
      )}
    </>
  )
}

export const Failure = ({ error }) => (
  <div>{error.message}</div>
)

export const Success = ({ user }) => {
  return <Posts posts={user.posts}/>
}
