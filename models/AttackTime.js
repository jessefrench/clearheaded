const mongoose = require('mongoose')
const moment = require('moment')

const AttackTimeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
        get: (date) => moment.utc(date).format('M-DD-YYYY')
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('AttackTime', AttackTimeSchema)