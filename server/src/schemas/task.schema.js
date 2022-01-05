const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: String,
    category: String,
    completed: {type: Boolean, default: false},
})

module.exports = mongoose.model("task", taskSchema);