const mongoose = require('mongoose')

const PainLocationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    painLocation: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('PainLocation', PainLocationSchema)