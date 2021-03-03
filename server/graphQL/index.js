const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql')
const UserModel = require('../db/models')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    name: String
    username: String
    password: String
  }
  type Query {
    users: [User]
  }
`

const resolvers = {
  Query: {
    users: async () => {
      const data = await UserModel.find({})
      return data
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

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

module.exports = { RootQuery, server }
