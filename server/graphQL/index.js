const { ApolloServer } = require('apollo-server')
const typeDefs = require('./types')
const resolvers = require('./resolvers')

// APOLLO_KEY = 'service:grief-napkin-mobile-app-hsj03v:4pbIxhb-oTdXQM5G-E5mGA'
// APOLLO_GRAPH_VARIANT = 'current'
// APOLLO_SCHEMA_REPORTING = true

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   playground: true,
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
