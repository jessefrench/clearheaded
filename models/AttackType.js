const mongoose = require('mongoose')
const moment = require('moment')

const AttackTypeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    type: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('AttackType', AttackTypeSchema)