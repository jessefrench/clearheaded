const mongoose = require('mongoose')

const TriggersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    triggers: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Triggers', TriggersSchema)