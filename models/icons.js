const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const icSchema = new Schema({
    name: String,
});
module.exports = mongoose.model('icon', icSchema, 'icons');