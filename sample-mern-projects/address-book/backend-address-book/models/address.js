//address.js
const mongoose = require('mongoose');

//address schema for storing address
const addressSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    address: String
});

module.exports = mongoose.model('Address', addressSchema, 'addresses');
