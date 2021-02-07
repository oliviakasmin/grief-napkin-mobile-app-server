const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const { graphqlHTTP } = require('express-graphql')
let cors = require('cors')
const { GraphQLSchema } = require('graphql')
const RootQuery = require('./server/graphQL')
let mongoose = require('mongoose')
const URI = require('./config')

app.use(cors())

// Connect to mongodb database
mongoose.connect(process.env.MONGODB_URI || URI)

mongoose
  .connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch(error => console.log(error))

mongoose.connection.on('error', err => {
  console.error(
    `something is not working with the mongoose db connection :( ${err.message})`
  )
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is running')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected')
})

// Connect to GraphQL
const schema = new GraphQLSchema({
  query: RootQuery,
})

app.use('/griefNapkin', graphqlHTTP({ schema, graphiql: true }))

// Listen on Port
app.listen(PORT, () => {
  console.log(`GraphQL data served on port ${PORT}.`)
})

module.exports = app
