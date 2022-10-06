const mongoose = require('mongoose')
const moment = require('moment')

const SymptomsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    symptoms: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Symptoms', SymptomsSchema)