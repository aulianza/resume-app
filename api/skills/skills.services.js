var mongoose = require('mongoose')
var skillSchema = require('./skills.model')

skillSchema.statics = {
  create: function(data, cb){
    var skill = new this(data)
    skill.save(cb)
  },

  get: function(query, cb){
    this.find(query, cb)
  },

  getByName: function(query, cb){
    this.find(query, cb)
  },

  update: function(query, updateData, cb){
    this.findOneAndUpdate(query, 
      {$set: updateData}, {new: true}, cb)
  },

  delete: function(query, cb){
    this.findOneAndDelete(query, cb)
  }
}

var skillsModel = mongoose.model('Skills', skillSchema)
module.exports = skillsModel