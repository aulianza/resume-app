var mongoose = require('mongoose')
var Schema = mongoose.Schema
var skillSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  level: {
    type: String,
    unique: false,
    required: true
  }
}, {
  timestamps: true
})

module.exports = skillSchema