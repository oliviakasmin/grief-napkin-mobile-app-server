const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    firstname: String
    lastname: String
    username: String
    password: String
  }
  type Query {
    allUsers: [User]
  }
`

module.exports = typeDefs
