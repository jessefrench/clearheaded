const mongoose = require('mongoose')

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