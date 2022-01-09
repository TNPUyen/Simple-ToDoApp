const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: String,
    // userId: String,
    taskList: [String],
})

module.exports = mongoose.model("category", categorySchema);