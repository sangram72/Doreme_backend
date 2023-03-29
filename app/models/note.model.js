const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: String,
    email : String,
    phone : String,
    drone_name : String

}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);