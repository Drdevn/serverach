 const mongoose = require('mongoose')

 const Schema = mongoose.Schema
 const userSchema = new Schema({
     email: String,
     password: String,
     username: String,
     counter: Number,
     icon: String,
    //  achievenew: String,
    //  achievetaken: String,
    //  achievedone: String,
    //  group: String,
    //  date: String

 })
 module.exports = mongoose.model('user', userSchema, 'users')