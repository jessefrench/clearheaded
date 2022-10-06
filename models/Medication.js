const mongoose = require('mongoose')
const moment = require('moment')

const MedicationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    medication: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Medication', MedicationSchema)