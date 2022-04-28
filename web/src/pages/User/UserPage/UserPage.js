import { useAuth } from '@redwoodjs/auth';

import UserCell from 'src/components/User/UserCell'
import UserPostsCell from 'src/components/Post/UserPostsCell'

const UserPage = ({ id }) => {
  return (
    <>
      <UserCell id={id} />
      <UserPostsCell id={id} />
    </>
  )
}

export default UserPage
