let mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel
