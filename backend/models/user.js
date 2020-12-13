const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email : String,
    phone : Number,
    password : String,
    image : String
});
//DB Model name :user
const user = mongoose.model('user', userSchema);

module.exports = user;