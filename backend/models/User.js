const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    email: { type: String, unique: true},
    passwd: { type: String}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);