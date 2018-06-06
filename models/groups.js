const mongoose = require('mongoose')

const Schema = mongoose.Schema
const groupSchema = new Schema({
    name: String,
    admin: String,
    users: [String],
    achievements: [String]
})
module.exports = mongoose.model('group', groupSchema, 'groups')