import UserCell from 'src/components/User/UserCell'
import PostsCell from 'src/components/Post/PostsCell'

const UserPage = ({ id }) => {
  return (
    <>
      <UserCell id={id} />
      <PostsCell />
    </>
  )
}

export default UserPage
