import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import PostForm from 'src/components/Post/PostForm'

export const QUERY = gql`
  query EditPostById($id: Int!) {
    post: post(id: $id) {
      id
      createdAt
      body
      authorId
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      createdAt
      body
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div>{error.message}</div>
)

export const Success = ({ post }) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      console.log('Post updated')
      navigate(routes.user({ id: post.authorId }))
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    updatePost({ variables: { id, input: castInput } })
  }

  return (
    <div>
      <header>
        <h2>Edit Post {post.id}</h2>
      </header>
      <div>
        <PostForm post={post} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
