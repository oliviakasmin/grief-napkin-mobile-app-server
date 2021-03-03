const { server } = require('./server/graphQL')
let mongoose = require('mongoose')
const { MONGODB_URI } = require('./.env')
const chalk = require('chalk')

// Connect to mongodb database

mongoose
  .connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch(error => console.log(error))

mongoose.connection.on('connected', () => {
  console.log(chalk.cyan('🐢 Mongoose connection is running'))
})

mongoose.connection.on('error', err => {
  console.error(
    chalk.red(
      `something is not working with the mongoose db connection :( ${err.message})`
    )
  )
})

mongoose.connection.on('disconnected', () => {
  console.log(chalk.red('Mongoose connection is disconnected'))
})

// listen to Apollo server on localhost

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(chalk.blue(`🚀  Server ready at ${url}graphql`))
})
