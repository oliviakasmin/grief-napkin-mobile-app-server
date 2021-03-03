const { server } = require('./server/graphQL')
let mongoose = require('mongoose')
const { MONGODB_URI } = require('./.env')

// Connect to mongodb database

// if (process.env.NODE_ENV === 'production') {
//   mongoose
//     .connect(process.env.MONGODB_URI || URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .catch(error => console.log(error))
// }

mongoose
  .connect(process.env.MONGODB_URI || MONGODB_URI, {
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
  console.log('🐢 Mongoose connection is running')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected')
})

// listen to Apollo server on localhost

server.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`)
})
