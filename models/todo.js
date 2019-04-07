const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: 'String',
    completed: 'boolean'
}, { versionKey: false })

module.exports = Todo = mongoose.model('todo', TodoSchema)