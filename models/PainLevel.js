const mongoose = require('mongoose')

const PainLevelSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    level: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PainLevel', PainLevelSchema)