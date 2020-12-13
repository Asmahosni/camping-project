const mongoose = require('mongoose');

const centerSchema = mongoose.Schema({
    name: String,
    location: String,
    facilities : Array,
    description : String,
    phone : Number,
    socialMedia : String,
    email : String,
    image : String,
    region : String,
    rate :  String
});
//DB Model name :stadium
const center = mongoose.model('center', centerSchema);

module.exports = center;