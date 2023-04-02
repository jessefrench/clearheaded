const mongoose = require('mongoose')

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