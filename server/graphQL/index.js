const { ApolloServer } = require('apollo-server')
const typeDefs = require('./types')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: 'service:grief-napkin-mobile-app-hsj03v:4pbIxhb-oTdXQM5G-E5mGA',
  },
  introspection: true,
  playground: {
    endpoint: 'https://grief-napkin-mobile.herokuapp.com/',
  },
  introspection: true,
})

module.exports = { server }
