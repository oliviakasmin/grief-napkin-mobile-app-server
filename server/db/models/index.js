let mongoose = require('mongoose')
const { lossReason, lossConnection } = require('../../../sitedata')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: { type: String, required: true, lowercase: true },
  lastname: { type: String, required: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: String,
  usage: {
    type: String,
    enum: ['the loss is mine', 'I am here to support (and also grieve)'],
  },
  lost: [
    {
      name: { type: String, lowercase: true },
      connection: { type: String, enum: lossConnection },
      reason: { type: String, enum: lossReason },
    },
  ],
  friends: [
    {
      email: { type: String, required: true },
      name: { type: String, required: true },
      closeness: { type: String, enum: ['core crew', 'larger circle'] },
    },
  ],
  dates: [
    {
      deathiversary: {
        name: { type: String },
        date: { type: Date },
      },
      birthday: {
        name: { type: String },
        date: { type: Date },
      },
      specialOccasion: {
        description: { type: String },
        name: { type: String },
        date: { type: Date },
      },
      other: {
        description: { type: String },
        name: { type: String },
        date: { type: Date },
      },
    },
  ],
  checkIns: [
    {
      mood: { type: String, enum: ['good', 'medium', 'bad'] },
      description: { type: String },
      date: { type: Date },
    },
  ],
  journal: [
    { prompt: { type: String }, text: { type: String }, date: { type: Date } },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel
