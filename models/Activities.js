const mongoose = require('mongoose')
const moment = require('moment')

const ActivitiesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    activities: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Activities', ActivitiesSchema)