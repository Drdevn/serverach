 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const userSchema = new Schema({
     email: String,
     password: String,
     username: String,
     counter: Number,
     icon: String,
     submittedAchieves:[{achieveId: String, userId: String, isSubmitted: Boolean}],
     subscribedAchieves: [{achieved: String, authorId: String, isSubmittd:Boolean}],
     doneAchieves:[{doneAchieveId: String}],
     groups: [{name:String, author:String, id:String}],
     // achieves: [{id: String, doneId: String}]

 });
 module.exports = mongoose.model('user', userSchema, 'users');