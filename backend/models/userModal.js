const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fName: { type: String, require: true },
    email: { type: email, require: true },
    contact: { type: Number, require: false },
    passwd: { type: String, require: true },
});

module.exports = mongoose.userSchema('users')