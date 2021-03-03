const { ApolloServer } = require('apollo-server')
const typeDefs = require('./types')
const resolvers = require('./resolvers')
// const { APOLLO_KEY } = require('../../secrets')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: 'service:grief-napkin-mobile-app-hsj03v:4pbIxhb-oTdXQM5G-E5mGA',
  },
  introspection: true,
  // comment this in when deploying
  // playground: {
  //   endpoint: 'https://grief-napkin-mobile.herokuapp.com/',
  // },
})

module.exports = { server }
