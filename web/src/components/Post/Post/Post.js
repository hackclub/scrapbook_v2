import { useAuth } from '@redwoodjs/auth';
import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const Post = ({ post }) => {
  const { isAuthenticated, currentUser } = useAuth();

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      console.log('Post deleted')
      navigate(routes.user({ username: currentUser.username }))
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <>
      <ul>
        <li>
          <Link
            to={routes.post({ authorId: post.authorId, postId: post.id })}
            title={'Show post ' + post.id + ' detail'}>
            {post.createdAt}
          </Link>
        </li>
        <li>{post.body}</li>
      </ul>
      { (isAuthenticated && currentUser.id == post.authorId) &&
        <div>
          <Link
            to={routes.editPost({ id: post.id })}
            title={'Edit post ' + post.id}
          >
            Edit
          </Link>
          <button
            type="button"
            title={'Delete post ' + post.id}
            onClick={() => onDeleteClick(post.id)}
          >
            Delete
          </button>
        </div>
      }
    </>
  )
}

export default Post
