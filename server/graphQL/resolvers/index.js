const UserModel = require('../../db/models')

const resolvers = {
  Query: {
    allUsers: async () => {
      const data = await UserModel.find({})
      return data
    },
  },
}

module.exports = resolvers
