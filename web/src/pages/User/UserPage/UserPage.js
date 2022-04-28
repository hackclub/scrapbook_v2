import { useAuth } from '@redwoodjs/auth';

import UserCell from 'src/components/User/UserCell'
import UserPostsCell from 'src/components/Post/UserPostsCell'

const UserPage = ({ username }) => {
  return (
    <>
      <UserCell username={username} />
      <UserPostsCell username={username} />
    </>
  )
}

export default UserPage
