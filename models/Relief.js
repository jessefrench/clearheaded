const mongoose = require('mongoose')
const moment = require('moment')

const ReliefSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    relief: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Relief', ReliefSchema)