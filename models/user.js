 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const userSchema = new Schema({
     email: String,
     password: String,
     username: String,
     counter: Number,
     icon: String,
     groups : [{name:String,author:String, id:String}],
     achieves: [{name: String, id: String}]

 });
 module.exports = mongoose.model('user', userSchema, 'users');