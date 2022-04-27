import { Link, routes, navigate } from '@redwoodjs/router'

const User = ({ user }) => {
  return (
    <>
      <h2>{user.email}</h2>
    </>
  )
}

export default User
