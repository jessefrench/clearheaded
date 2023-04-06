const mongoose = require('mongoose')
const moment = require('moment')

const SummarySchema = new mongoose.Schema({
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
        required: false,
        default: Date.now,
        get: (date) => moment.utc(date).format('M/D/YYYY')
    },
    startTime: {
        type: String,
        required: false,
        get: (startTime) => moment(startTime, 'HH:mm').format('h:mm A')
    },
    endTime: {
        type: String,
        required: false,
        get: (endTime) => moment(endTime, 'HH:mm').format('h:mm A')
    },
    type: {
        type: Array,
        required: false
    },
    level: {
        type: String,
        required: false
    },
    attackLocation: {
        type: String,
        required: false
    },
    symptoms: {
        type: Array,
        required: false
    },
    triggers: {
        type: Array,
        required: false
    },
    aura: {
        type: Array,
        required: false
    },
    medication: {
        type: Array,
        required: false
    },
    relief: {
        type: Array,
        required: false
    },
    activities: {
        type: Array,
        required: false
    },
    painLocation: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('Summary', SummarySchema)