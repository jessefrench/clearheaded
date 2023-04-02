const mongoose = require('mongoose')
const moment = require('moment')

const HeadacheSchema = new mongoose.Schema({
  headache: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now,
    get: (date)=> moment.utc(date).format('M-DD-YYYY'),
  },
  email: {
    type: String,
    unique: false
  },
  userId: {
    type: String,
    required: true
  },
  important: {
    type: Boolean,
    default: false
    }
})

module.exports = mongoose.model('Headache', HeadacheSchema)