const mongoose = require('mongoose')

const Schema = mongoose.Schema
const achSchema = new Schema({
    name: String,
    content: String,
    reward: String,
    value: Number,
    active: Boolean,
    mark: String
})
module.exports = mongoose.model('achieve', achSchema, 'achievements')