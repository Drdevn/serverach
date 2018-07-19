 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const userSchema = new Schema({
     email: String,
     password: String,
     username: String,
     counter: Number,
     icon: String,
     subscribedAchieves: [{achieved: String, authorId: String, isSubmittd:Boolean, value: String}],
     doneAchieves:[{name: String, content: String, reward: String, data: String, value: String}],
     groups: [{name:String, author:String, id:String}],

 });
 module.exports = mongoose.model('user', userSchema, 'users');