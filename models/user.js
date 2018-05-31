 const mongoose = require('mongoose')

 const Schema = mongoose.Schema
 const userSchema = new Schema({
     email: String,
     password: String,
     username: String,
     counter: Number,
     icon: String
 })
 module.exports = mongoose.model('user', userSchema, 'users')