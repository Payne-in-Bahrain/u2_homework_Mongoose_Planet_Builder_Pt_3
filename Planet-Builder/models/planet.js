const mongoose = require('mongoose')
const plantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate(value) {
      if (value === undefined) {
        throw new Error('Please give the plant a name.')
      }
    }
  },
  color: {
    type: String,
    required: true,
    validate(value) {
      if (value === undefined) {
        throw new Error('Please give the plant a color.')
      }
    }
  },
  poisonous: { type: Boolean, enum: [true, false], required: true }
})

const planetSchema = mongoose.Schema({
  name: { type: String, required: true },
  climate: {
    type: String,
    required: true,
    enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest'],
    default: 'Desert',
    validate(value) {
      //throw new Error('Please select climate.')
      if (value === undefined) {
        throw new Error('Please select climate.')
      }
    }
  },
  population: { type: Number, required: true },
  plants: [plantSchema],
  explorer: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
})

module.exports = mongoose.model('Planet', planetSchema)
