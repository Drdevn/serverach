const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const achSchema = new Schema({
    name: String,
    content: String,
    reward: String,
    groupId: String,
    value: String,
    author: String,
    active: Boolean,
    likes: Number,
});
module.exports = mongoose.model('achieve', achSchema, 'achievements');