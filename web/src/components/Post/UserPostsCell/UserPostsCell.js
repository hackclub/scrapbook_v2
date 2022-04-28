import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query FindUserPosts($id: Int!) {
    user(id: $id) {
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
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }) => {
  return <Posts posts={user.posts} />
}
