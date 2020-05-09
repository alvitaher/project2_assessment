const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {type: String, required: true},
    isDone: {type: Boolean, default: false}
})

const TodoList = mongoose.model('TodoList', listSchema);

module.exports = TodoList;