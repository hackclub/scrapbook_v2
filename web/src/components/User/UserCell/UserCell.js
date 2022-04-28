import User from 'src/components/User/User'

export const QUERY = gql`
  query FindUserByUsername($username: String!) {
    user: user(username: $username) {
      id
      username
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }) => (
  <div>{error.message}</div>
)

export const Success = ({ user }) => {
  return <User user={user} />
}
