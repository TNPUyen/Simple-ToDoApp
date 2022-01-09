const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: String,
    category: String,
    today: {type: Boolean, default: false},
    pinned: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
    completed: {type: Boolean, default: false},
})

module.exports = mongoose.model("task", taskSchema);