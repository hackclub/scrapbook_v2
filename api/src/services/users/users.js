import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = (data) => {
  if (data.id) {
    return db.user.findUnique({
      where: { id: data.id },
    })
  } else if (data.username) {
    return db.user.findUnique({
      where: { username: data.username },
    })
  } else {
    console.log("User service can't find user")
  }
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  posts: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).posts(),
}
