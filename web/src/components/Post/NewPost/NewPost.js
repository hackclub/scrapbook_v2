import { useAuth } from "@redwoodjs/auth";
import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PostForm from 'src/components/Post/PostForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const { currentUser } = useAuth();

  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      console.log('Post created')
      navigate(routes.user({ username: currentUser.username }))
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const onSave = (input) => {
    createPost({ variables: { input: input } })
  }

  return (
    <div>
      <header>
        <h2>New Post</h2>
      </header>
      <div>
        <PostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost
