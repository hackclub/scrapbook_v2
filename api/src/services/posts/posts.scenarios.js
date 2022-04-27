export const standard = defineScenario({
  post: {
    one: {
      data: {
        body: 'String',
        author: {
          create: {
            email: 'String375607',
            username: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        body: 'String',
        author: {
          create: {
            email: 'String4846573',
            username: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
