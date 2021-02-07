if (process.env.NODE_ENV !== 'production') require('./secrets.js')

const mongoDbUsername = process.env.MONGO_DB_USERNAME
const mongoDbPassword = process.env.MONGO_DB_PASSWORD

const MONGODB_URI = `mongodb+srv://${mongoDbUsername}:${mongoDbPassword}@grief-napkin.rtc82.mongodb.net/grief-napkin?retryWrites=true&w=majority`

module.exports = MONGODB_URI
