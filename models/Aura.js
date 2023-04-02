const mongoose = require('mongoose')

const AuraSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    aura: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Aura', AuraSchema)