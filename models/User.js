const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
})

// password hash middleware
 UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

// helper method for validating user's password
UserSchema.methods.comparePassword = function(candidatePassword) {
  const currentPassword = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, currentPassword, function(err, isMatch) {
      if (err) return reject(err)
      resolve(isMatch)
    })
  })
}

module.exports = mongoose.model('User', UserSchema)