 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const userSchema = new Schema({
   email: String,
   password: String,
   username: String,
   counter: Number,
   icon: String,
   subscribedAchieves: [{id: String, isActive: Boolean}],
   subscribers: [{id: String, isActive: Boolean}],
   doneAchieves:[{id: String}],
   groups: [{id: String}],

 });

 module.exports = mongoose.model('user', userSchema, 'users');
