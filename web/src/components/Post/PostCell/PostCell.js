import Post from 'src/components/Post/Post'

export const QUERY = gql`
  query FindPostById($postId: Int!) {
    post: post(id: $postId) {
      id
      createdAt
      body
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post }) => {
  return <Post post={post} />
}
