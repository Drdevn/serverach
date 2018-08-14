const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const groupSchema = new Schema({
    name: String,
    users: [{id: String}],
    author: String,
    achieves: [{id: String}]

});
module.exports = mongoose.model('group', groupSchema, 'groups');