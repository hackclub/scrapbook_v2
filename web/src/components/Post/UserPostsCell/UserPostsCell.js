import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query FindUserPosts($id: Int!) {
    user(id: $id) {
      id
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

export const Empty = () => {
  return (
    <div>
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div>{error.message}</div>
)

export const Success = ({ user, auth }) => {
  const { isAuthenticated, currentUser } = auth

  return <Posts posts={user.posts} currentUserIsAuthor={isAuthenticated && currentUser.id == user.id}/>
}
