const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql')
const UserModel = require('../models')

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: new GraphQLList(UserType),
      resolve: async () => {
        const data = await UserModel.find({})
        return data
      },
    },
  },
})

module.exports = RootQuery
