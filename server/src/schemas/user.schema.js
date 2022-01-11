const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    confirmPassword: String,
    avatar: String,
    categoriesList: [String],
    todayList: [String],
    sharedList: [String],
})

module.exports = mongoose.model("user", userSchema);