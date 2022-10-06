const mongoose = require('mongoose')
const moment = require('moment')

const AttackLocationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    attackLocation: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AttackLocation', AttackLocationSchema)