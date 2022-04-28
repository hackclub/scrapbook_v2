import { useAuth } from '@redwoodjs/auth';

import UserCell from 'src/components/User/UserCell'
import UserPostsCell from 'src/components/Post/UserPostsCell'

const UserPage = ({ id }) => {
  const auth = useAuth()

  if (auth.loading) {
    return null
  }

  return (
    <>
      <UserCell id={id} />
      <UserPostsCell id={id} auth={auth} />
    </>
  )
}

export default UserPage
