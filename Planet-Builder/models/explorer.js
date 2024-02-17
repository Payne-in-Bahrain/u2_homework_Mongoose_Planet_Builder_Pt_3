const mongoose = require('mongoose')

const exporerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (value === undefined) {
        throw new Error('Please give the explorer a name.')
      }
    }
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if (value === undefined) {
        throw new Error('Please give the explorer an age.')
      }
    }
  }
})

module.exports = mongoose.model('Explorer', exporerSchema)
