import { Link, routes, navigate } from '@redwoodjs/router'

import PostsCell from 'src/components/Post/PostsCell'

const User = ({ user }) => {
  return (
    <>
      <h2>{user.email}</h2>
      <PostsCell />
    </>
  )
}

export default User
