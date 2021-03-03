const { ApolloServer } = require('apollo-server')
const typeDefs = require('./types')
const resolvers = require('./resolvers')
const { APOLLO_KEY } = require('../../secrets')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: APOLLO_KEY,
  },
  introspection: true,
  // comment this in when deploying
  playground: {
    endpoint: 'https://grief-napkin-mobile.herokuapp.com/',
  },
})

module.exports = { server }
