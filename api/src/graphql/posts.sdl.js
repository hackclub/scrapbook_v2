export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    body: String!
    author: User!
    authorId: Int!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    body: String!
  }

  input UpdatePostInput {
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
