const { ApolloServer } = require('apollo-server')
const typeDefs = require('./types')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   playground: {
  //     endpoint: 'https://grief-napkin-mobile.herokuapp.com/graphql',
  //   },
  //   engine: {
  //     apiKey: 'service:Naman-Goyal-4755:Z-h8TenAdH37BgaUoCu_TQ',
  //   },
  //   introspection: true,
})

module.exports = { server }
